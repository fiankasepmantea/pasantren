<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Mutqin as Model;
use App\Http\Requests\MutqinRequest as ModelRequest;
use App\Http\Resources\MutqinResource as ModelResource;
use App\Models\Unit;
use App\Models\Group;
use App\Models\Santri;
use App\Models\Muhaffizh;

class MutqinController extends Controller
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

    public function show(Model $mutqin)
    {
        return new ModelResource($mutqin);
    }

    public function update(ModelRequest $request, Model $mutqin)
    {
        if ($mutqin->saveModel($request->all(), true)) {
            return new ModelResource($mutqin);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $mutqin)
    {
        try {
            $mutqin->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }

    public function getMutqinGroup()
    {
        $group = Group::orderBy('nama', 'ASC')->get(); 
        return response()->json(['status' => 'success', 'data' => $group]);
    }

    public function getMutqinUnit()
    {   
        $unit = Unit::orderBy('nama', 'ASC')->get(); 
        return response()->json(['status' => 'success', 'data' => $unit]);
    }

    public function getMutqinMuhaffizh(Request $request)
    {  
        
        if(isset($request->group_id)){
            $muhaffizh = Muhaffizh::where('group_id',$request->group_id)->orderBy('nama', 'ASC')->get();
        }else{
            $muhaffizh = Muhaffizh::orderBy('nama', 'ASC')->get();;
        }
       
        return response()->json(['status' => 'success', 'data' => $muhaffizh]);
    }

    public function getMutqinSantri(Request $request)
    {
        if(isset($request->group_id)){
            $santri = Santri::where('group_id',$request->group_id)->orderBy('nama', 'ASC')->get();
        }else{
            $santri = Santri::orderBy('nama', 'ASC')->get();;
        }
        
        return response()->json(['status' => 'success', 'data' => $santri]);
    }
}
