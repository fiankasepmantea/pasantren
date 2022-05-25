<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\DB;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SuratJalan as Model;
use App\Http\Requests\SuratJalanRequest as ModelRequest;
use App\Http\Resources\SuratJalanResource as ModelResource;
use App\Models\OM;
use App\Models\Stock;
use App\Models\SuratJalan;

class SuratJalanController extends Controller
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

    public function show(Model $suratjalan)
    {
        return new ModelResource($suratjalan);
    }

    public function update(ModelRequest $request, Model $suratjalan)
    {
        if ($suratjalan->saveModel($request->all(), true)) {
            return new ModelResource($suratjalan);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $suratjalan)
    {
        try {
            $suratjalan->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }
    public function getOM()
    {
        $om = OM::orderBy('no_om', 'ASC')->get(); 
        return response()->json(['status' => 'success', 'data' => $om]);
    }
    public function getSales(Request $request){ 
        if(isset($request->id_om)){
            $sales = OM::join('salesorders', 'salesorders.id', '=', 'oms.so_id')
              ->join('users', 'users.id', '=', 'salesorders.sales_id')
              ->where('oms.id',$request->id_om)
              ->get();
            return response()->json(['status' => 'success', 'data' => $sales]);
        }else{
            $sales = OM::join('salesorders', 'salesorders.id', '=', 'oms.so_id')
              ->join('users', 'users.id', '=', 'salesorders.sales_id')
              ->get();
            return response()->json(['status' => 'success', 'data' => $sales]);
        }
    }
    public function getCustomer(Request $request){ 
        if(isset($request->id_om)){
            $customer = OM::join('salesorders', 'salesorders.id', '=', 'oms.so_id')
              ->join('customers', 'customers.id', '=', 'salesorders.customer_id')
              ->where('oms.id',$request->id_om)
              ->get();
            return response()->json(['status' => 'success', 'data' => $customer]);
        }else{
            $customer = OM::join('salesorders', 'salesorders.id', '=', 'oms.so_id')
              ->join('customers', 'customers.id', '=', 'salesorders.customer_id')
              ->get();
            return response()->json(['status' => 'success', 'data' => $customer]);
        }
    }
    public function postQuantity(Request $request){
      DB::beginTransaction();
      try{
          if(isset($request->id)){
              $surat_jalan = SuratJalan::find($request->id);
              
              if($surat_jalan->is_active == 1){
                $details = $surat_jalan->suratjalanDetail;
                foreach ($details as $key => $detail) {
                  $data_stock = Stock::find($detail->stock_id);
                  $quantity = $data_stock->quantity-$detail->quantity;
                  $data_stock->quantity = $quantity;
                  $data_stock->save();
                }
                $surat_jalan->is_active = 0;
                $surat_jalan->save();
                DB::commit();
                return response()->json(['status' => 'success', 'data' => $data_stock]);
              }

              if($surat_jalan->is_active == 0){
                DB::rollback();
                return response()->json(['status' => 'failed', 'Data sudah dikurangi sebelumnya!']);
              }
              
          }       
      }catch (\Exception $e) {
          throw new \Exception($e->getMessage());
      }
  
        
    }
}
