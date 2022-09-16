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
            
            $santri = Model::where('user_id',$request->user_id)
                        ->where('nama',ucwords($request->nama))->count();

            return response()->json(['status' => 'success', 'data' => ($santri == 0)]);
        
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
}
