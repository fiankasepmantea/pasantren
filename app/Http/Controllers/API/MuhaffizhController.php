<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Muhaffizh as Model;
use App\Http\Requests\MuhaffizhRequest as ModelRequest;
use App\Http\Resources\MuhaffizhResource as ModelResource;
use App\Models\Unit;
use App\Models\Group;

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
     
}
