<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Maklon as Model;
use App\Http\Requests\MaklonRequest as ModelRequest;
use App\Http\Resources\MaklonResource as ModelResource;
use App\Models\Regency;
use App\Models\Provincy;
use App\Models\Bank;
class MaklonController extends Controller
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

    public function show(Model $maklon)
    {
        return new ModelResource($maklon);
    }

    public function update(ModelRequest $request, Model $maklon)
    {
        if ($maklon->saveModel($request->all(), true)) {
            return new ModelResource($maklon);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $maklon)
    {
        try {
            $maklon->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }
    public function getProvincyName()
    {
        $provincy = Provincy::orderBy('name', 'ASC')->get();
        return response()->json(['status' => 'success', 'data' => $provincy]);
    }
    public function getCityName(Request $request)
    {
        if(isset($request->province_id)){
            $city = Regency::where('province_id',$request->province_id)->orderBy('name', 'ASC')->get();
        }else{
            $city = Regency::orderBy('name', 'ASC')->get();
        }
        
        return response()->json(['status' => 'success', 'data' => $city]);
    }
    public function getBankName()
    {
        $bank = Bank::orderBy('nama', 'ASC')->get(); 
        return response()->json(['status' => 'success', 'data' => $bank]);
    }
}
