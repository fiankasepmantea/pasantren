<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Color as Model;
use App\Http\Requests\ColorRequest as ModelRequest;
use App\Http\Resources\ColorResource as ModelResource;

class ColorController extends Controller
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

    public function show(Model $color)
    {
        return new ModelResource($color);
    }

    public function update(ModelRequest $request, Model $color)
    {
        if ($color->saveModel($request->all(), true)) {
            return new ModelResource($color);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $color)
    {
        try {
            $color->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }
}
