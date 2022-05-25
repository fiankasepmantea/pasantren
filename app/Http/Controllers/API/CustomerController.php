<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customer as Model;
use App\Http\Requests\CustomerRequest as ModelRequest;
use App\Http\Resources\CustomerResource as ModelResource;
use App\Models\Regency;
use App\Models\Provincy;
use App\User;
class CustomerController extends Controller
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

    public function show(Model $customer)
    {
        return new ModelResource($customer);
    }

    public function update(ModelRequest $request, Model $customer)
    {
        if ($customer->saveModel($request->all(), true)) {
            return new ModelResource($customer);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $customer)
    {
        try {
            $customer->delete();
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
            $city = Regency::orderBy('name', 'ASC')->get();;
        }
        
        return response()->json(['status' => 'success', 'data' => $city]);
    }
    public function getSalesName()
    {
        $sales = User::where('level_id','=',3)->get(); 
        return response()->json(['status' => 'success', 'data' => $sales]);
    }
}

