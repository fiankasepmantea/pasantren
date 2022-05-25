<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\OmAccessories as Model;
use App\Http\Requests\OmAccessoriesRequest as ModelRequest;
use App\Http\Resources\OmAccessoriesResource as ModelResource;

class OmAccessoriesController extends Controller
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

    public function show(Model $omAccessory)
    {
        return new ModelResource($omAccessory);
    }

    public function update(ModelRequest $request, Model $omAccessory)
    {
        if ($omAccessory->saveModel($request->all(), true)) {
            return new ModelResource($omAccessory);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $omAccessory)
    {
        try {
            $omAccessory->delete();
        } catch (\Exception $e) {
            return response()->json(['errors' => $e->getMessage()], 403);
        }
    }

    public function postData(Request $request)
    {
        if (isset($request->source_id) && isset($request->om_id) && isset($request->department_id)) {
            try {
                Model::createByPostData($request->source_id, $request->om_id, $request->department_id);
            } catch (\Exception $e) {
                return response()->json(['errors' => $e->getMessage()], 500);
            }
        } else {
            return response()->json(['errors' => 'Missing parameter'], 400);
        }
    }

    public function saveDetailItem(Request $request, $id)
    {
        if (isset($request->details) && is_array($request->details)) {
            
            try {

                foreach ($request->details as $detail) {

                    $omAccessoriesDetailModel = \App\Models\OmAccessoriesDetail::find($detail['id']);

                    if (!is_null($omAccessoriesDetailModel)) {
                        $omAccessoriesDetailModel->saveModel($detail, true);

                        if (isset($detail['items'])) {
                            \App\Models\OmAccessoriesDetailItem::createByOmAccessories($detail['id'], $detail['items']);
                        }
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
