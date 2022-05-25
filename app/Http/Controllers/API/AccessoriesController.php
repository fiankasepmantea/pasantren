<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Accessories as Model;
use App\Http\Requests\AccessoriesRequest as ModelRequest;
use App\Http\Resources\AccessoriesResource as ModelResource;
use App\Models\Piece;

class AccessoriesController extends Controller
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

    public function show(Model $accessory)
    {   //return response()->json($accessories);
        return new ModelResource($accessory);
    }

    public function update(ModelRequest $request, Model $accessory)
    {
        if ($accessory->saveModel($request->all(), true)) {
            return new ModelResource($accessory);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $accessory)
    {
        try {
            $accessory->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }
    public function getPiecesName()
    {
        $pieces = Piece::orderBy('unit_name', 'ASC')->get(); 
        return response()->json(['status' => 'success', 'data' => $pieces]);
    }
}
