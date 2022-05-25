<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category as Model;
use App\Http\Requests\CategoryRequest as ModelRequest;
use App\Http\Resources\CategoryResource as ModelResource;

class CategoryController extends Controller
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

    public function show(Model $category)
    {
        return new ModelResource($category);
    }

    public function update(ModelRequest $request, Model $category)
    {
        if ($category->saveModel($request->all(), true)) {
            return new ModelResource($category);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $category)
    {
        try {
            $category->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }
}
