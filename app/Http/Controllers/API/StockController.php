<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Stock as Model;
use App\Http\Requests\StockRequest as ModelRequest;
use App\Http\Resources\StockResource as ModelResource;
class StockController extends Controller
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

    public function show(Model $stock)
    {
        return new ModelResource($stock);
    }

    public function update(ModelRequest $request, Model $stock)
    {
        if ($stock->saveModel($request->all(), true)) {
            return new ModelResource($stock);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $stock)
    {
        try {
            $stock->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }
}
