<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\Muhtqin as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Arr;
use App\Models\Unit;
use App\Models\Group;
use App\Models\Santri;
use App\Models\Muhaffizh;

class Setoran extends Model
{
    use SoftDeletes;

    protected $table = 'setorans';
    protected $primaryKey = 'id';
    protected $guarded = [];

    public static function getModel($params, $raw = false)
    {
        $modelQuery = static::query();

        if (($filter_name = Arr::get($params, 'nama', false))) {
            $modelQuery->where('nama', 'LIKE', '%' . $filter_name . '%');
        }
        // DEFAULT ORDERING DATA
        $modelQuery->orderBy('created_at', 'desc');

        if (!$raw) {
            if ( ($item_per_page = Arr::get($params, 'limit', false)) ) {
                $modelQuery = $modelQuery->paginate($item_per_page);
            } else {
                $modelQuery = $modelQuery->get();
            }    
        }
        
        return $modelQuery;
    }

    public function saveModel($data, $is_update = false)
    {
        $model = [];

        $model['santri_id'] = $data['santri_id'];
        $model['muhaffizh_id'] = ucwords($data['muhaffizh_id']);
        $model['juz'] = $data['juz'];
        $model['halaman'] = ucwords($data['halaman']);
        $model['baris'] = $data['baris'];
        $model['total_setoran'] = $data['total_setoran'];
        $model['group_id'] = $data['group_id'];
 
        return $is_update ? $this->update($model) : $this->create($model);
    }   

    public function mutqinMuhaffizh(){
        return $this->belongsToMany(Muhaffizh::class,'muhaffizh_id','id');
    }
    public function mutqinSantri(){
        return $this->belongsToMany(Santri::class,'santri_id','id');
    }
    public function mutqinUnit(){
        return $this->belongsTo(Unit::class,'unit_id','id');
    }
    public function mutqinGroup(){
        return $this->belongsTo(Group::class,'group_id','id');
    }
    //list
    public function relationGroup(){
        return $this->belongsTo(Group::class,'group_id','id');
    }
    public function relationSantri(){
        return $this->belongsTo(Santri::class,'santri_id','id');
    }
    public function relationMuhaffizh(){
        return $this->belongsTo(Muhaffizh::class,'muhaffizh_id','id');
    }

}
