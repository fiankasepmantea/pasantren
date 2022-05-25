<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Size as Model;
use App\Http\Requests\SizeRequest as ModelRequest;
use App\Http\Resources\SizeResource as ModelResource;

class SizeController extends Controller
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

    public function show(Model $size)
    {
        return new ModelResource($size);
    }

    public function update(ModelRequest $request, Model $size)
    {
        if ($size->saveModel($request->all(), true)) {
            return new ModelResource($size);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $size)
    {
        try {
            $size->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }
}
