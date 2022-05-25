<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SalesOrder as Model;
use App\Http\Requests\SalesOrderRequest as ModelRequest;
use App\Http\Resources\SalesOrderResource as ModelResource;
use App\Models\Category;
use App\Models\ClothingModel;
use App\Models\Color;
use App\Models\Material;
use App\Models\Size;
use App\Models\Label;
use App\Models\Customer;
use App\User;
class SalesOrderController extends Controller
{
    public function index(Request $request)
    {
        return ModelResource::collection(Model::getModel($request->all()));
    }

    public function store(Request $request)
    {
        $model = new Model;
        if ( ($model = $model->saveModel($request->all())) ) {
            return new ModelResource($model);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function show(Model $salesorder)
    {
        return new ModelResource($salesorder);
    }

    public function update(ModelRequest $request, Model $salesorder)
    {
        if ($salesorder->saveModel($request->all(), true)) {
            return new ModelResource($salesorder);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $salesorder)
    {
        try {
            $salesorder->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }
    public function getCustomer()
    {
        $customer = Customer::orderBy('nama', 'ASC')->get();
        return response()->json(['status' => 'success', 'data' => $customer]);
    }
    public function getCustomerAddress(Request $request)
    {
        if(isset($request->customer_id)){
            $address = Customer::where('id',$request->customer_id)->orderBy('nama', 'ASC')->get();
        }else{
            $address = Customer::orderBy('nama', 'ASC')->get();
        }
        
        return response()->json(['status' => 'success', 'data' => $address]);
    }
    public function getSales()
    {
        $sales = User::where('level_id','=',3)->get(); 
        return response()->json(['status' => 'success', 'data' => $sales]);
    }
    public function getFollowUp()
    {
        $follow = User::where('level_id','=',4)->get(); 
        return response()->json(['status' => 'success', 'data' => $follow]);
    }
    public function getCategory()
    {
        $category = Category::orderBy('nama_kategori', 'ASC')->get();
        return response()->json(['status' => 'success', 'data' => $category]);
    }
    public function getModel()
    {
        $model = ClothingModel::orderBy('nama_model', 'ASC')->get();
        return response()->json(['status' => 'success', 'data' => $model]);
    }
    public function getSize()
    {
        $size = Size::orderBy('nama', 'ASC')->get();
        return response()->json(['status' => 'success', 'data' => $size]);
    }
    public function getLabel()
    {
        $label = Label::orderBy('nama', 'ASC')->get();
        return response()->json(['status' => 'success', 'data' => $label]);
    }
    public function getMaterial()
    {
        $material = Material::orderBy('nama', 'ASC')->get();
        return response()->json(['status' => 'success', 'data' => $material]);
    }
    public function getColor()
    {
        $color = Color::orderBy('nama', 'ASC')->get();
        return response()->json(['status' => 'success', 'data' => $color]);
    }
    
}
