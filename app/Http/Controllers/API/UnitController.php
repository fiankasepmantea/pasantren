<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Unit as Model;
use App\Http\Requests\UnitRequest as ModelRequest;
use App\Http\Resources\UnitResource as ModelResource;

class UnitController extends Controller
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

    public function show(Model $unit)
    {
        return new ModelResource($unit);
    }

    public function update(ModelRequest $request, Model $unit)
    {
        if ($unit->saveModel($request->all(), true)) {
            return new ModelResource($unit);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $unit)
    {
        try {
            $unit->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }
}

