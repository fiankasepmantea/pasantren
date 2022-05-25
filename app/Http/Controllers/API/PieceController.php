<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Piece as Model;
use App\Http\Requests\PieceRequest as ModelRequest;
use App\Http\Resources\PieceResource as ModelResource;

class PieceController extends Controller
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

    public function show(Model $piece)
    {
        return new ModelResource($piece);
    }

    public function update(ModelRequest $request, Model $piece)
    {
        if ($piece->saveModel($request->all(), true)) {
            return new ModelResource($piece);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $piece)
    {
        try {
            $piece->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }
}
