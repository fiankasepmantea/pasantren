<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\OM as Model;
use App\Http\Requests\OMRequest as ModelRequest;
use App\Http\Resources\OMResource as ModelResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use file;

class OMController extends Controller
{
    public function index(Request $request)
    {
        return ModelResource::collection(Model::getModel($request->all()));
    }

    public function store(ModelRequest $request, Model $model)
    {  
        $model = new Model;
        if ( ($model = $model->saveModel($request->all())) ) {
            return new ModelResource($model);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function show(Model $om)
    {
        return new ModelResource($om);
    }

    public function update(ModelRequest $request, Model $om)
    {
        if ($om->saveModel($request->all(), true)) {
            return new ModelResource($om);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $om)
    {
        try {
            $om->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }
    public function getUnitName()
    {
        $unit_name = Piece::orderBy('unit_name', 'ASC')->get(); 
        return response()->json(['status' => 'success', 'data' => $unit_name]);
    }
    public function getUploadFile(Request $request){
        $storage_url = 'uploads/oms/';
        if ($request->hasFile('photo')) {
            $file_ext  = $request->photo->extension();
            $file_name = Str::uuid(). '.'.$file_ext;
            
            Storage::putFileAs(
                'public/uploads/oms',$request->file('photo'), $file_name
            );
            $response_data = [
                'filename' =>  $file_name,
                'path' => asset(Storage::url($storage_url.$file_name))
            ];
            return response()->json(['status' => true, 'data'=>$response_data]);
        }else{
            return response()->json(['errors' => 'Failed upload file'], 500);
        }     

        
    }
}
