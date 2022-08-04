<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tahsin as Model;
use App\Http\Requests\TahsinRequest as ModelRequest;
use App\Http\Resources\TahsinResource as ModelResource;
use App\Models\Group;
use App\Models\Santri;
use App\Models\Muhaffizh;

class TahsinController extends Controller
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

    public function show(Model $tahsin)
    {
        return new ModelResource($tahsin);
    }

    public function update(ModelRequest $request, Model $tahsin)
    {
        if ($tahsin->saveModel($request->all(), true)) {
            return new ModelResource($tahsin);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $tahsin)
    {
        try {
            $tahsin->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }

    public function getTahsinMuhaffizh(Request $request)
    {  
        $muhaffizh = Muhaffizh::orderBy('nama', 'ASC')->get(); 
     
        return response()->json(['status' => 'success', 'data' => $muhaffizh]);
    }

    public function getTahsinGroup(Request $request)
    {   
        if(isset($request->muhaffizh_id)){
            $group = Group::where('muhaffizh_id',$request->muhaffizh_id)->orderBy('nama', 'ASC')->get();
        }else{
            $group = Group::orderBy('nama', 'ASC')->get();;
        }

        return response()->json(['status' => 'success', 'data' => $group]);
    }

    public function getTahsinSantri(Request $request)
    {
        if(isset($request->group_id)){
            $santri = Santri::where('group_id',$request->group_id)->orderBy('nama', 'ASC')->get();
        }else{
            $santri = Santri::orderBy('nama', 'ASC')->get();;
        }
        
        return response()->json(['status' => 'success', 'data' => $santri]);
    }
}
