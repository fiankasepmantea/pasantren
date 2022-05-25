<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tailor as Model;
use App\Http\Requests\TailorRequest as ModelRequest;
use App\Http\Resources\TailorResource as ModelResource;
use App\Models\Department;

class TailorController extends Controller
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

    public function show(Model $tailor)
    {
        return new ModelResource($tailor);
    }

    public function update(ModelRequest $request, Model $tailor)
    {
        if ($tailor->saveModel($request->all(), true)) {
            return new ModelResource($tailor);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $tailor)
    {
        try {
            $tailor->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }
    public function getDepartementName()
    {
        $departements = Department::orderBy('nama', 'ASC')->get(); 
        return response()->json(['status' => 'success', 'data' => $departements]);
    }
}
