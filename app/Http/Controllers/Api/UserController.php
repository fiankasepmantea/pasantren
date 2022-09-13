<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User as Model;
use App\Http\Requests\UserRequest as ModelRequest;
use App\Http\Resources\UserResource as ModelResource;
use App\Models\Level;

class UserController extends Controller
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

    public function show(Model $user)
    {
        return new ModelResource($user);
    }

    public function update(ModelRequest $request, Model $user)
    {
        if ($user->saveModel($request->all(), true)) {
            return new ModelResource($user);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $user)
    {
        try {
            $user->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }

    public function getLevel()
    {
        $level = Level::orderBy('nama', 'ASC')->get(); 
        return response()->json(['status' => 'success', 'data' => $level]);
    }

    public function getUserWalisantri(){
        $walisantri = Model::where('level_id',4)->get();
        return response()->json(['status' => 'success', 'data' => $walisantri]);
    }
}
