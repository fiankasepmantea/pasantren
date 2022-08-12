<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tahsin as Model;
use App\Http\Requests\TahsinRequest as ModelRequest;
use App\Http\Resources\TahsinResource as ModelResource;
use App\Models\Group;
use App\Models\Santri;
use App\Models\Muhaffizh;
use Aspera\Spreadsheet\XLSX\Reader;

class TahsinController extends Controller
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

    public function show(Model $tahsin)
    {
        return new ModelResource($tahsin);
    }

    public function update(ModelRequest $request, Model $tahsin)
    {
        if ($tahsin->saveModel($request->all(), true)) {
            return new ModelResource($tahsin);
        } else {
            return response()->json(['errors' => 'Error while storing data'], 500);
        }
    }

    public function destroy(Model $tahsin)
    {
        try {
            $tahsin->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
    }

    public function getTahsinMuhaffizh(Request $request)
    {  
        $muhaffizh = Muhaffizh::orderBy('nama', 'ASC')->get(); 
     
        return response()->json(['status' => 'success', 'data' => $muhaffizh]);
    }

    public function getTahsinGroup(Request $request)
    {   
        if(isset($request->muhaffizh_id)){
            $group = Group::where('muhaffizh_id',$request->muhaffizh_id)->orderBy('nama', 'ASC')->get();
        }else{
            $group = Group::orderBy('nama', 'ASC')->get();;
        }

        return response()->json(['status' => 'success', 'data' => $group]);
    }

    public function getTahsinSantri(Request $request)
    {
        if(isset($request->group_id)){
            $santri = Santri::where('group_id',$request->group_id)->orderBy('nama', 'ASC')->get();
        }else{
            $santri = Santri::orderBy('nama', 'ASC')->get();;
        }
        
        return response()->json(['status' => 'success', 'data' => $santri]);
    }

    public function uploadTahsin(Request $request, Model $tahsin) {
        $request->validate(['file_tahsin'=>'mimes:xlsx']);
        $result = array('success'=>false,'message'=>'','errors'=>array());
        
        $file = $request->file('file_tahsin');
        // Parse xlsx file
        $xr = new Reader();
        $xr->open($file->getRealPath());

        if(!$xr->valid()) {
            $result['message'] = "File kosong/tidak ada baris untuk diproses";
            return response()->json($result);
        }

        $mandatory = ['santri','bulan','pekan','buku','halaman','group','muhaffizh'];
        $head = $xr->current();
        foreach ($head as &$field) {
            $field = strtolower($field);
        }
        $fields = $rec = array();
        foreach ($mandatory as $field) {
            $i = array_search($field, $head);
            if($i === false) {
                $result['message'] = "File Excel harus memiliki kolom: ".$field;
                return response()->json($result);
            }
            $fields[$i] = $field;
            $rec[$field] = '';
        }

        // Process parsed row, reverse lookup string to id, validate relations, insert to db..
        $success = $with_error = $failed = 0; 
        foreach($xr as $i => $row) {
            if($i<=1) continue; // skip header
            $newrec = array('sertifikat_proses'=>$row['buku'].' '.$row['halaman'].' Hal.');
            $errors = '';
            foreach ($fields as $k => $f) {
                $rec[$f] = trim($row[$k]);
                // collect non id field values
                if(!in_array($f, ['santri','group','muhaffizh'])) 
                    $newrec[$f] = $row[$k];
            }

            $muhaffizh = Muhaffizh::where('nama','LIKE',"%{$rec['muhaffizh']}%")->first();
            if(!$muhaffizh) {
                $newrec['muhaffizh_id'] = null;
                $errors.= "WARNING: Nama muhaffizh {$rec['muhaffizh']} tidak ditemukan.\r\n";
                // Percuma diterusin juga, santri & groupnya gak bakal ketemu..
                $failed++;
                $result['errors'][$i] = $errors;
                continue;
            }
            else $newrec['muhaffizh_id'] = $muhaffizh->id;

            $santri = Santri::where([
                    ['nama','LIKE',"%{$rec['santri']}%"],
                    ['muhaffizh_id',$newrec['muhaffizh_id']]
                ])->first();
            if(!$santri) {
                $newrec['santri_id'] = null;
                $errors.= "WARNING: Nama santri {$rec['santri']}"
                    ." dibawah muhaffizh {$rec['muhaffizh']} tidak ditemukan.\r\n";
            }
            else $newrec['santri_id'] = $santri->id;

            $group = Group::where([
                ['nama','LIKE',"%{$rec['group']}%"],
                ['muhaffizh_id',$newrec['muhaffizh_id']]
            ])->first();
            if(!$group) {
                $newrec['group_id'] = null;
                $errors.= "WARNING: Nama group {$rec['group']}"
                    ." kelompok muhaffizh {$rec['muhaffizh']} tidak ditemukan.\r\n";
            }
            else $newrec['group_id'] = $group->id;

            if($tahsin->saveModel($newrec)) {
                $success++;
                if(!empty($errors)) {
                    $result['errors'][$i] = $errors;
                    $with_error++;
                }
            } else {
                $failed++;
            }

            // $result['debug'][] = $newrec;
        }
        $result['message'] = "Upload sukses: $success terimport ($with_error dgn error), $failed gagal";
        $result['success'] = true;

        return response()->json($result);
    }
}
