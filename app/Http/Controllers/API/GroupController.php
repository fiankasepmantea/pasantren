<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Group as Model;
use App\Http\Requests\GroupRequest as ModelRequest;
use App\Http\Resources\GroupResource as ModelResource;
use App\Models\Unit;

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

    public function getGroupUnit()
    {   
        $unit = Unit::orderBy('nama', 'ASC')->get(); 
        return response()->json(['status' => 'success', 'data' => $unit]);
    }
}

