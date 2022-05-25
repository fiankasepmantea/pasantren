<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\OmCutting as Model;
use App\Http\Requests\OmCuttingRequest as ModelRequest;
use App\Http\Resources\OmCuttingResource as ModelResource;

class OmCuttingController extends Controller
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

    public function show(Model $omCutting)
    {
        return new ModelResource($omCutting);
    }

    public function update(ModelRequest $request, Model $omCutting)
    {
        if ($omCutting->saveModel($request->all(), true)) {
            return new ModelResource($omCutting);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $omCutting)
    {
        try {
            $omCutting->delete();
        } catch (\Exception $e) {
            return response()->json(['errors' => $e->getMessage()], 403);
        }
    }

    public function postData(Request $request)
    {
        if (isset($request->om_id) && isset($request->department_id)) {
            try {
                Model::createByPostData($request->om_id, $request->department_id);
            } catch (\Exception $e) {
                return response()->json(['errors' => $e->getMessage()], 500);
            }
        } else {
            return response()->json(['errors' => 'Missing parameter'], 400);
        }
    }

    public function saveWaste(Request $request, $id)
    {
        if (isset($request->items) && is_array($request->items)) {
            
            try {

                foreach ($request->items as $item) {
                    $omCuttingDetailModel = \App\Models\OmCuttingDetail::find($item['id']);

                    if (!is_null($omCuttingDetailModel)) {
                        $omCuttingDetailModel->saveModel($item, true);
                    }
                }

                // SET READY TO PROCEED STATUS
                Model::setReadytoProceed($id, true);

            } catch (\Exception $e) {
                return response()->json(['errors' => $e->getMessage()], 500);
            }

        } else {
            return response()->json(['errors' => 'Missing parameter'], 400);
        }
    }

    public function setProceed(Request $request, $id)
    {
        try {
            $status = (isset($request->status) && is_bool($request->status)) ? $request->status : false;
            Model::setReadytoProceed($id, $status);

            return response()->json(['message' => 'Set Proceed status success'], 200);
        } catch (\Exception $e) {
            return response()->json(['errors' => $e->getMessage()], 500);
        }
    }
}
