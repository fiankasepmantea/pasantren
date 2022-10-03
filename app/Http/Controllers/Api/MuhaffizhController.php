<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Muhaffizh as Model;
use App\Http\Requests\MuhaffizhRequest as ModelRequest;
use App\Http\Resources\MuhaffizhResource as ModelResource;
use App\Models\Unit;
use App\Models\Group;
use App\User;
use XLSXWriter;
use Aspera\Spreadsheet\XLSX\Reader;

class MuhaffizhController extends Controller
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

    public function show(Model $muhaffizh)
    {
        return new ModelResource($muhaffizh);
    }

    public function update(ModelRequest $request, Model $muhaffizh)
    {
        if ($muhaffizh->saveModel($request->all(), true)) {
            return new ModelResource($muhaffizh);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $muhaffizh)
    {
        try {
            $muhaffizh->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }
    public function getMuhaffizhUnit()
    {
        $unit = Unit::orderBy('nama', 'ASC')->get(); 
        return response()->json(['status' => 'success', 'data' => $unit]);
    }
    
    public function xlsMuhaffizh(Request $req, $jenis = 'detail') 
    {
        $model = new Model();
        $xw = new XLSXWriter();
        $ws = "Sheet1";

        switch($jenis) {
            case 'jml_per_unit': // Muhaffizh per unit (Unit, Jml.Muhaffizh)
                $columns = array('No'=>'','Unit'=>'nama_unit','Jml.Muhaffizh'=>'count_muhaffizh');
                $widths = array(5,20,8);
                $records = $model->getReportJmlPerUnit();
            break;
            case 'jml_santri': // Muhaffizh per Jml.Santri (Muhaffizh, Jml.Santri)
                $columns = array('No'=>'','Muhaffizh'=>'nama','Jml.Santri'=>'count_santri');
                $widths = array(5,20,8);
                $records = $model->getReportJmlSantri();
            break;
            default: // Muhaffizh per org (Nama, Unit, Nik)
                $columns = array('No'=>'','Nama'=>'nama','Unit'=>'nama_unit','NIK'=>'nomor_induk');
                $widths = array(5,20,20,10);
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
            ->header('Content-disposition', "attachment; filename=laporan_muhaffizh_$jenis.xlsx")
        ;
    }

    public function uploadMuhaffizh(Request $request, Model $muhaffizh) {
        $request->validate(['file_muhaffizh'=>'mimes:xlsx']);
        $result = array('success'=>false,'message'=>'','errors'=>array());
        
        $file = $request->file('file_muhaffizh');
        // $result["FileRealPath"] = $file->getRealPath();
        // Parse xlsx file
        $xr = new Reader();
        $xr->open($file->getRealPath());

        if(!$xr->valid()) {
            $result['message'] = "File kosong/tidak ada baris untuk diproses";
            return response()->json($result);
        }
        
        $mandatory = ['nomor_induk','nama','alamat','tempat_lahir','tanggal_lahir','no_hp','pendidikan_terakhir',
                        'mulai_bertugas','angkatan_kelas','status',
                        'unit','user_login_muhaffizh'];
                        
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
                if(!in_array($f, ['unit','user_login_muhaffizh'])) 
                    $newrec[$f] = $row[$k];
            }

            $unit = Unit::where([
                ['nama','LIKE',"%{$rec['unit']}%"],
            ])->first();

            if(!$unit) {
                $newrec['unit_id'] = null;
                $errors.= "WARNING: Unit {$rec['unit']}\r\n";

                $failed++;
                $result['errors'][$i] = $errors;
                continue;
            }
            else $newrec['unit_id'] = $unit->id;

            $loginMuhaffizh = User::where([
                    ['name','LIKE',"%{$rec['user_login_muhaffizh']}%"],
                    ['level_id',3]
                ])->first();

            if(!$loginMuhaffizh) {
                $newrec['user_id'] = null;
                $errors.= "WARNING: Login Salah {$rec['user_login_muhaffizh']}\r\n";

                $failed++;
                $result['errors'][$i] = $errors;
                continue;
            }
            else $newrec['user_id'] = $loginMuhaffizh->id;
         
            if($muhaffizh->saveModel($newrec)) {
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
