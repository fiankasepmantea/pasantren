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
use App\Models\LevelSantri;

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
}
