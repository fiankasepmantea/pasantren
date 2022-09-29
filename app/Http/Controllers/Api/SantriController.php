<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Santri as Model;
use App\Http\Requests\SantriRequest as ModelRequest;
use App\Http\Resources\SantriResource as ModelResource;
use App\Models\Muhaffizh;
use App\Models\Group;
use App\Models\Grade;
use App\User;
use App\Models\LevelSantri;
use XLSXWriter;
use Aspera\Spreadsheet\XLSX\Reader;

class SantriController extends Controller
{
    public function index(Request $request)
    {
        return ModelResource::collection(Model::getModel($request->all()));
    }

    public function store(ModelRequest $request, Model $model)
    {
        if ( ($model = $model->saveModel($request->all())) ) {
            return new ModelResource($model);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function show(Model $santri)
    {
        return new ModelResource($santri);
    }

    public function update(ModelRequest $request, Model $santri)
    {
        if ($santri->saveModel($request->all(), true)) {
            return new ModelResource($santri);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $santri)
    {
        try {
            $santri->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }

    public function getSantriMuhaffizh(Request $request)
    {   
        $muhaffizh = Muhaffizh::orderBy('nama', 'ASC')->get(); 
      
        return response()->json(['status' => 'success', 'data' => $muhaffizh]);
    }

    public function getSantriGroup(Request $request)
    {
        if(isset($request->muhaffizh_id)){
            $group = Group::where('muhaffizh_id',$request->muhaffizh_id)->orderBy('nama', 'ASC')->get();
        }else{
            $group = Group::orderBy('nama', 'ASC')->get();;
        }

        return response()->json(['status' => 'success', 'data' => $group]);
    }
    
    public function getSantriGrade()
    {
        $grade = Grade::orderBy('grade', 'ASC')->get(); 
        return response()->json(['status' => 'success', 'data' => $grade]);
    }

    public function getSantriLevel()
    {
        $level = LevelSantri::orderBy('level', 'ASC')->get(); 
        return response()->json(['status' => 'success', 'data' => $level]);
    }

    public function checkSantri(Request $request)
    {
       
        if(isset($request->nama) && isset($request->user_id)){
            
            $countSantri = Model::where('user_id',$request->user_id)
                        ->where('nama',ucwords($request->nama))->count();

            if($countSantri > 0){
                // $santri = Model::where('user_id',$request->user_id)
                //             ->where('nama',ucwords($request->nama))->delete();   

                return response()->json(['status' => 'success', 'data' => true]);
            }else {
                return response()->json(['status' => 'failed', 'data' => false]);
            }   

        }

    }

    public function xlsSantri(Request $req, $jenis = 'detail') 
    {
        $model = new Model();
        $xw = new XLSXWriter();
        $ws = "Sheet1";

        switch($jenis) {
            case 'jml_per_unit': // santri per unit (Unit, Jml.santri)
                $columns = array('No'=>'','Unit'=>'nama_unit','Jml.santri'=>'count_santri');
                $widths = array(5,20,8);
                $records = $model->getReportJmlPerUnit();
            break;
            case 'jml_per_gender':
                $columns = array('No'=>'','Gender'=>'gender','Jml.Santri'=>'count_santri');
                $widths = array(5,20,8);
                $records = $model->getReportPerGender();
            break;
            default: // Group per nama santri (Nama, Nik, Unit, hapalan , mutqin, buku)
                $columns = array('No'=>'','Nama'=>'nama','NIK'=>'nomor_induk','Unit'=>'nama_unit'
                    ,'Hapalan'=>'hapalan','Mutqin'=>'mutqin','Buku'=>'buku');
                $widths = array(5,20,10,20,20,16);
                $records = $model->getReportDetail();
        }
        // return response(print_r($records,true),500);
        
        $formats = array_fill(0,count($columns),"GENERAL");
        $style = array("border-style"=>"thin","border"=>"left,right,top,bottom");
        $style_h = array("font-style"=>"bold","border-style"=>"thin","border"=>"left,right,top,bottom","format"=>"GENERAL");
        $xw->writeSheetHeader($ws,$formats,array('suppress_row'=>true,'widths'=>$widths));
        $xw->writeSheetRow($ws,array_keys($columns),$style_h);
        
        foreach ($records as $i => $rec) {
            $row = array('no'=>$i+1);
            foreach ($columns as $key => $field) {
                if(!empty($field)) $row[$key] = $rec->$field;
            }
            $xw->writeSheetRow($ws, $row, $style);
        }
        return response($xw->writeToString())
            ->header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
            ->header('Content-disposition', "attachment; filename=laporan_santri_$jenis.xlsx")
        ;
    }

    public function uploadSantri(Request $request, Model $santri) {
        $request->validate(['file_santri'=>'mimes:xlsx']);
        $result = array('success'=>false,'message'=>'','errors'=>array());
        
        $file = $request->file('file_santri');
        // $result["FileRealPath"] = $file->getRealPath();
        // Parse xlsx file
        $xr = new Reader();
        $xr->open($file->getRealPath());

        if(!$xr->valid()) {
            $result['message'] = "File kosong/tidak ada baris untuk diproses";
            return response()->json($result);
        }
        
        $mandatory = ['nomor_induk','nama','alamat','tempat_lahir','tanggal_lahir','gender','nama_ayah','nama_ibu','no_hp',
                        'mulai_belajar','angkatan_kelas',
                        'group','grade','levelsantri','walisantri','muhaffizh'];
                        
        $head = $xr->current();
        foreach ($head as &$field) {
            $field = strtolower($field);
        }
        $fields = $rec = array();
        foreach ($mandatory as $field) {
            $i = array_search($field, $head);
            if($i === false) {
                $result['message'] = "File Excel harus memiliki kolom: ".$field;
                return response()->json($result);
            }
            $fields[$i] = $field;
            $rec[$field] = '';
        }

        // Process parsed row, reverse lookup string to id, validate relations, insert to db..
        $success = $with_error = $failed = 0; 
        foreach($xr as $i => $row) {
            if($i<=1) continue; // skip header
            $newrec = array();
            $errors = '';

            foreach ($fields as $k => $f) {
                $rec[$f] = trim($row[$k]);
                // collect non id field values
                if(!in_array($f, ['group','grade','levelsantri','walisantri','muhaffizh'])) 
                    $newrec[$f] = $row[$k];
            }

            $grade = Grade::where([
                ['grade','LIKE',"%{$rec['grade']}%"],
            ])->first();

            if(!$grade) {
                $newrec['grade_id'] = null;
                $errors.= "WARNING: Grade {$rec['grade']}\r\n";
            }
            else $newrec['grade_id'] = $grade->id;

            $levelSantri = LevelSantri::where([
                ['level',"{$rec['levelsantri']}"],
            ])->first();

            if(!$levelSantri) {
                $newrec['levelsantri_id'] = null;
                $errors.= "WARNING: Level Santri {$rec['levelsantri']}\r\n";
            }
            else $newrec['levelsantri_id'] = $levelSantri->id;

            $muhaffizh = Muhaffizh::where('nama','LIKE',"%{$rec['muhaffizh']}%")->first();
            if(!$muhaffizh) {
                $newrec['muhaffizh_id'] = null;
                $errors.= "WARNING: Nama muhaffizh {$rec['muhaffizh']} tidak ditemukan.\r\n";
                // Percuma diterusin juga, santri & groupnya gak bakal ketemu..
                $failed++;
                $result['errors'][$i] = $errors;
                continue;
            }
            else $newrec['muhaffizh_id'] = $muhaffizh->id;

            $walisantri = User::where([
                    ['name','LIKE',"%{$rec['walisantri']}%"],
                    ['level_id',4]
                ])->first();

            if(!$walisantri) {
                $newrec['user_id'] = null;
                $errors.= "WARNING: Nama Walisantri {$rec['walisantri']}\r\n";
            }
            else $newrec['user_id'] = $walisantri->id;

            $group = Group::where([
                ['nama','LIKE',"%{$rec['group']}%"],
                ['muhaffizh_id',$newrec['muhaffizh_id']]
            ])->first();

            if(!$group) {
                $newrec['group_id'] = null;
                $errors.= "WARNING: Nama group {$rec['group']}"
                    ." kelompok muhaffizh {$rec['muhaffizh']} tidak ditemukan.\r\n";
            }
            else $newrec['group_id'] = $group->id;
           
            if($santri->saveModel($newrec)) {
                $success++;
                if(!empty($errors)) {
                    $result['errors'][$i] = $errors;
                    $with_error++;
                }
            } else {
                $failed++;
            }

            $result['debug'][] = $newrec;
        }
        $result['message'] = "Upload sukses: $success terimport ($with_error dgn error), $failed gagal";
        $result['success'] = true;

        return response()->json($result);
    }
}
