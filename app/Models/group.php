<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Arr;

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
        $model['unit_id'] = ucwords($data['unit_id']);
        return $is_update ? $this->update($model) : $this->create($model);
    }   

    public function groupUnit(){
        return $this->belongsTo(Unit::class,'unit_id','id');
    }
    // list
    public function listUnit(){
        return $this->belongsTo(Unit::class,'unit_id','id');
    }
}
