<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Group as Model;
use App\Http\Requests\GroupRequest as ModelRequest;
use App\Http\Resources\GroupResource as ModelResource;
use App\Models\Muhaffizh;
use XLSXWriter;

class GroupController extends Controller
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

    public function show(Model $group)
    {
        return new ModelResource($group);
    }

    public function update(ModelRequest $request, Model $group)
    {
        if ($group->saveModel($request->all(), true)) {
            return new ModelResource($group);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $group)
    {
        try {
            $group->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }

    public function getGroupMuhaffizh()
    {   
        $muhaffizh = Muhaffizh::orderBy('nama', 'ASC')->get(); 
        return response()->json(['status' => 'success', 'data' => $muhaffizh]);
    }

    public function xlsGroup(Request $req, $jenis = 'detail') 
    {
        $groups_m = new Model();
        $xw = new XLSXWriter();
        $ws = "Sheet1";

        switch($jenis) {
            case 'per_unit':
                $columns = array('No'=>'','Unit'=>'nama_unit','Jml.Group'=>'count_group');
                $widths = array(5,20,8);
                $groups = $groups_m->getReportPerUnit();
            break;
            case 'per_muhaffizh':
                $columns = array('No'=>'','Muhaffizh'=>'nama_muhaffizh','Jml.Group'=>'count_group');
                $widths = array(5,20,8);
                $groups = $groups_m->getReportPerMuhaffizh();
            break;
            default:
                $columns = array('No'=>'','Nama'=>'nama','Jml.Santri'=>'count_santri','Unit'=>'nama_unit','Muhaffizh'=>'nama_muhaffizh');
                $widths = array(5,20,8,20,20);
                $groups = $groups_m->getReportDetail();
        }
        
        $formats = array_fill(0,count($columns),"GENERAL");
        $style = array("border-style"=>"thin","border"=>"left,right,top,bottom");
        $style_h = array("font-style"=>"bold","border-style"=>"thin","border"=>"left,right,top,bottom","format"=>"GENERAL");
        $xw->writeSheetHeader($ws,$formats,array('suppress_row'=>true,'widths'=>$widths));
        $xw->writeSheetRow($ws,array_keys($columns),$style_h);
        
        foreach ($groups as $i => $group) {
            $row = array('no'=>$i+1);
            foreach ($columns as $key => $field) {
                if(!empty($field)) $row[$key] = $group->$field;
            }
            $xw->writeSheetRow($ws, $row, $style);
            // $xw->writeSheetRow($ws, $group->toArray());
        }
        return response($xw->writeToString())
            ->header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
            ->header('Content-disposition', "attachment; filename=laporan_halaqoh_$jenis.xlsx")
        ;
    }
}

