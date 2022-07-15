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

    public function uploadSetoran(Request $request) {
        $file = $request->file('file_setoran');
        // TODO: detect mime (xls/xlsx/csv), parse file, process each row, rev.lookup string to id, insert to db..

        return response()->json(['status'=>'success','data'=>
            ["FileName" => $file->getClientOriginalName(),
            "FileExtension" => $file->getClientOriginalExtension(),
            "FileRealPath" => $file->getRealPath(),
            "FileSize" => $file->getSize(),
            "FileMimeType" => $file->getMimeType()]
        ]);

        //Move Uploaded File
        // $destinationPath = 'uploads';
        // $file->move($destinationPath,$file->getClientOriginalName());
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
