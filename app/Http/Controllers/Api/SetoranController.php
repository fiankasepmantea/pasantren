<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Setoran as Model;
use App\Http\Requests\SetoranRequest as ModelRequest;
use App\Http\Resources\SetoranResource as ModelResource;
use App\Models\Group;
use App\Models\Santri;
use App\Models\Muhaffizh;
use XLSXWriter;
use Aspera\Spreadsheet\XLSX\Reader;

class SetoranController extends Controller
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

    public function show(Model $setoran)
    {
        return new ModelResource($setoran);
    }

    public function update(ModelRequest $request, Model $setoran)
    {
        if ($setoran->saveModel($request->all(), true)) {
            return new ModelResource($setoran);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $setoran)
    {
        try {
            $setoran->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }

    public function getSetoranMuhaffizh(Request $request)
    {  
        $muhaffizh = Muhaffizh::orderBy('nama', 'ASC')->get(); 
     
        return response()->json(['status' => 'success', 'data' => $muhaffizh]);
    }

    public function getSetoranGroup(Request $request)
    {   
        if(isset($request->muhaffizh_id)){
            $group = Group::where('muhaffizh_id',$request->muhaffizh_id)->orderBy('nama', 'ASC')->get();
        }else{
            $group = Group::orderBy('nama', 'ASC')->get();;
        }

        return response()->json(['status' => 'success', 'data' => $group]);
    }

    public function getSetoranSantri(Request $request)
    {
        if(isset($request->group_id)){
            $santri = Santri::where('group_id',$request->group_id)->orderBy('nama', 'ASC')->get();
        }else{
            $santri = Santri::orderBy('nama', 'ASC')->get();;
        }
        
        return response()->json(['status' => 'success', 'data' => $santri]);
    }

    public function uploadSetoran(Request $request, Model $setoran) {
        $request->validate(['file_setoran'=>'mimes:xlsx']);
        $result = array('success'=>false,'message'=>'','errors'=>array());
        
        $file = $request->file('file_setoran');
        // $result["FileRealPath"] = $file->getRealPath();
        // Parse xlsx file
        $xr = new Reader();
        $xr->open($file->getRealPath());

        if(!$xr->valid()) {
            $result['message'] = "File kosong/tidak ada baris untuk diproses";
            return response()->json($result);
        }

        $mandatory = ['santri','bulan','pekan','juz','halaman','baris','group','muhaffizh'];
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
                if(!in_array($f, ['santri','group','muhaffizh'])) 
                    $newrec[$f] = $row[$k];
            }

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

            $santri = Santri::where([
                    ['nama','LIKE',"%{$rec['santri']}%"],
                    ['muhaffizh_id',$newrec['muhaffizh_id']]
                ])->first();
            if(!$santri) {
                $newrec['santri_id'] = null;
                $errors.= "WARNING: Nama santri {$rec['santri']}"
                    ." dibawah muhaffizh {$rec['muhaffizh']} tidak ditemukan.\r\n";
            }
            else $newrec['santri_id'] = $santri->id;

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

            if($setoran->saveModel($newrec)) {
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

    public function xlsSetoran(Request $req) 
    {
        $model = new Model();
        $xw = new XLSXWriter();
        $ws = "Sheet1";

        $columns = array('Juz'=>'juz','Jml.Santri'=>'count_santri');
        $widths = array(8,16);
        $records = $model->getReportJmlSantriPerJuz();
        // return response(print_r($records,true),500);
        
        $formats = array_fill(0,count($columns),"GENERAL");
        $style = array("border-style"=>"thin","border"=>"left,right,top,bottom");
        $style_h = array("font-style"=>"bold","border-style"=>"thin","border"=>"left,right,top,bottom","format"=>"GENERAL");
        $xw->writeSheetHeader($ws,$formats,array('suppress_row'=>true,'widths'=>$widths));
        $xw->writeSheetRow($ws,array_keys($columns),$style_h);
        
        foreach ($records as $i => $rec) {
            $row = array();
            foreach ($columns as $key => $field) {
                $row[$key] = $rec->$field;
            }
            $xw->writeSheetRow($ws, $row, $style);
        }
        return response($xw->writeToString())
            ->header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
            ->header('Content-disposition', "attachment; filename=laporan_setoran.xlsx")
        ;
    }
}
