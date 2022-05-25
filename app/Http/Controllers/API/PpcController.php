<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PPC as Model;
use App\Http\Requests\PPCRequest as ModelRequest;
use App\Http\Resources\PPCResource as ModelResource;
use App\Models\SalesOrder;

class PPCController extends Controller
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

    public function show(Model $ppc)
    {
        return new ModelResource($ppc);
    }

    public function update(ModelRequest $request, Model $ppc)
    {
        if ($ppc->saveModel($request->all(), true)) {
            return new ModelResource($ppc);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $ppc)
    {
        try {
            $ppc->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }
    public function getSOName()
    {
        $so = SalesOrder::orderBy('no_so', 'ASC')->get(); 
        return response()->json(['status' => 'success', 'data' => $so]);
    }
    public function getDataSO(Request $request)
    {
        if(isset($request->so_id)){
            $so = SalesOrder::where('id',$request->so_id)->orderBy('no_so', 'ASC')->get();
        }else{
            $so = SalesOrder::orderBy('no_so', 'ASC')->get();
        }
        
        return response()->json(['status' => 'success', 'data' => $so]);
    }
}
