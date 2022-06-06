<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\Muhaffizh as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Arr;
use App\Models\Unit;
use App\Models\Group;

class Muhaffizh extends Model
{
    use SoftDeletes;

    protected $table = 'muhaffizhs';
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

        $model['nomor_induk'] = $data['nomor_induk'];
        $model['nama'] = ucwords($data['nama']);
        $model['alamat'] = $data['alamat'];
        $model['tempat_lahir'] = ucwords($data['tempat_lahir']);
        $model['tanggal_lahir'] = $data['tanggal_lahir'];
        $model['no_hp'] = $data['no_hp'];
        $model['mulai_bertugas'] = $data['mulai_bertugas'];
        $model['angkatan_kelas'] = $data['angkatan_kelas'];
        $model['status'] = $data['status'];
        $model['pendidikan_terakhir'] = $data['pendidikan_terakhir'];
        $model['group_id'] = $data['group_id'];
        $model['unit_id'] = $data['unit_id'];

        return $is_update ? $this->update($model) : $this->create($model);
    }   

    public function muhaffizhUnit(){
        return $this->belongsTo(Unit::class,'unit_id','id');
    }
    public function muhaffizhGroup(){
        return $this->belongsTo(Group::class,'group_id','id');
    }
    // list
    public function relationUnit(){
        return $this->belongsTo(Unit::class,'unit_id','id');
    }
    public function relationGroup(){
        return $this->belongsTo(Group::class,'group_id','id');
    }
}
