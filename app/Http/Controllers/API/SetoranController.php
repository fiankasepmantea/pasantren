<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Setoran as Model;
use App\Http\Requests\SetoranRequest as ModelRequest;
use App\Http\Resources\SetoranResource as ModelResource;
use App\Models\Unit;
use App\Models\Group;
use App\Models\Santri;
use App\Models\Muhaffizh;

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

    public function getSetoranGroup()
    {
        $group = Group::orderBy('nama', 'ASC')->get(); 
        return response()->json(['status' => 'success', 'data' => $group]);
    }

    public function getSetoranUnit()
    {   
        $unit = Unit::orderBy('nama', 'ASC')->get(); 
        return response()->json(['status' => 'success', 'data' => $unit]);
    }

    public function getSetoranMuhaffizh(Request $request)
    {  
        
        if(isset($request->group_id)){
            $muhaffizh = Muhaffizh::where('group_id',$request->group_id)->orderBy('nama', 'ASC')->get();
        }else{
            $muhaffizh = Muhaffizh::orderBy('nama', 'ASC')->get();;
        }
       
        return response()->json(['status' => 'success', 'data' => $muhaffizh]);
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
}
