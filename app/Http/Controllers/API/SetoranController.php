<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Setoran as Model;
use App\Http\Requests\SetoranRequest as ModelRequest;
use App\Http\Resources\SetoranResource as ModelResource;
use App\Models\Group;
use App\Models\Santri;
use App\Models\Muhaffizh;

class SetoranController extends Controller
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

    public function show(Model $setoran)
    {
        return new ModelResource($setoran);
    }

    public function update(ModelRequest $request, Model $setoran)
    {
        if ($setoran->saveModel($request->all(), true)) {
            return new ModelResource($setoran);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $setoran)
    {
        try {
            $setoran->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }

    public function getSetoranMuhaffizh(Request $request)
    {  
        $muhaffizh = Muhaffizh::orderBy('nama', 'ASC')->get(); 
     
        return response()->json(['status' => 'success', 'data' => $muhaffizh]);
    }

    public function getSetoranGroup(Request $request)
    {   
        if(isset($request->muhaffizh_id)){
            $group = Group::where('muhaffizh_id',$request->muhaffizh_id)->orderBy('nama', 'ASC')->get();
        }else{
            $group = Group::orderBy('nama', 'ASC')->get();;
        }

        return response()->json(['status' => 'success', 'data' => $group]);
    }

    public function getSetoranSantri(Request $request)
    {
        if(isset($request->group_id)){
            $santri = Santri::where('group_id',$request->group_id)->orderBy('nama', 'ASC')->get();
        }else{
            $santri = Santri::orderBy('nama', 'ASC')->get();;
        }
        
        return response()->json(['status' => 'success', 'data' => $santri]);
    }

    public function uploadSetoran(Request $request) {
        $file = $request->file('file_setoran');

        return response()->json(['status'=>'success','data'=>print_r($file,true)]);

        /*//Display File Name
        echo 'File Name: '.$file->getClientOriginalName();
        echo '<br>';

        //Display File Extension
        echo 'File Extension: '.$file->getClientOriginalExtension();
        echo '<br>';

        //Display File Real Path
        echo 'File Real Path: '.$file->getRealPath();
        echo '<br>';

        //Display File Size
        echo 'File Size: '.$file->getSize();
        echo '<br>';

        //Display File Mime Type
        echo 'File Mime Type: '.$file->getMimeType();

        //Move Uploaded File
        $destinationPath = 'uploads';
        $file->move($destinationPath,$file->getClientOriginalName());*/
    }
}
