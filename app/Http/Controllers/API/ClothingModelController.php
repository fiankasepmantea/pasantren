<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ClothingModel as Model;
use App\Http\Requests\ClothingModelRequest as ModelRequest;
use App\Http\Resources\ClothingModelResource as ModelResource;
use App\Models\Category;
use App\Models\Material;

class ClothingModelController extends Controller
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

    public function show(Model $clothingmodel)
    {
        return new ModelResource($clothingmodel);
    }

    public function update(ModelRequest $request, Model $clothingmodel)
    {
        if ($clothingmodel->saveModel($request->all(), true)) {
            return new ModelResource($clothingmodel);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $clothingmodel)
    {
        try {
            $clothingmodel->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }
    public function getCategoryName()
    {
        $kategori = Category::orderBy('nama_kategori', 'ASC')->get(); 
        return response()->json(['status' => 'success', 'data' => $kategori]);
    }
    public function getMaterialName()
    {
        $material = Material::orderBy('nama', 'ASC')->get(); 
        return response()->json(['status' => 'success', 'data' => $material]);
    }
}
