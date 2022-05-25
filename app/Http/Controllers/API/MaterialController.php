<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Material as Model;
use App\Http\Requests\MaterialRequest as ModelRequest;
use App\Http\Resources\MaterialResource as ModelResource;
use App\Models\Piece;
class MaterialController extends Controller
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

    public function show(Model $material)
    {
        return new ModelResource($material);
    }

    public function update(ModelRequest $request, Model $material)
    {
        if ($material->saveModel($request->all(), true)) {
            return new ModelResource($material);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $material)
    {
        try {
            $material->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }
    public function getUnitName()
    {
        $unit_name = Piece::orderBy('unit_name', 'ASC')->get(); 
        return response()->json(['status' => 'success', 'data' => $unit_name]);
    }
}
