<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Department as Model;
use App\Http\Requests\DepartmentRequest as ModelRequest;
use App\Http\Resources\DepartmentResource as ModelResource;

class DepartmentController extends Controller
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

    public function show(Model $department)
    {
        return new ModelResource($department);
    }

    public function update(ModelRequest $request, Model $department)
    {
        if ($department->saveModel($request->all(), true)) {
            return new ModelResource($department);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $department)
    {
        try {
            $department->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }
}
