<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Arr;
use App\Models\Muhaffizh;

class Group extends Model
{
    use SoftDeletes;

    protected $table = 'groups';
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

        $model['nama'] = ucwords($data['nama']);
        $model['muhaffizh_id'] = ucwords($data['muhaffizh_id']);
        return $is_update ? $this->update($model) : $this->create($model);
    }   

    public function getGroupMuhaffizh(){
        return $this->belongsTo(Muhaffizh::class,'muhaffizh_id','id');
    }
    // list
    public function listMuhaffizh(){
        return $this->belongsTo(Muhaffizh::class,'muhaffizh_id','id');
    }
}
