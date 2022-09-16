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

        if (($filter_name = Arr::get($params, 'group_name', false))) {
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

    // Report Group Detail
    /* SELECT groups.nama AS Nama,COUNT(santris.id) AS `Jml.Santri`
            ,units.nama AS Unit
            ,muhaffizhs.nama AS Muhaffizh
        FROM groups
        JOIN santris ON groups.id = santris.group_id
        JOIN units ON units.id = groups.unit_id
        JOIN muhaffizhs ON muhaffizhs.id = groups.muhaffizh_id
        GROUP BY Nama,Unit,Muhaffizh; */
    public function getReportDetail() {
        return static::query()
            ->select('groups.nama','units.nama AS nama_unit','muhaffizhs.nama AS nama_muhaffizh')
            ->selectRaw('COUNT(santris.id) AS count_santri')
            ->join('santris','santris.group_id','=','groups.id')
            ->join('muhaffizhs','muhaffizhs.id','=','groups.muhaffizh_id')
            ->join('units','units.id','=','muhaffizhs.unit_id')
            ->groupBy('groups.nama','nama_unit','nama_muhaffizh')
            ->get();
    }

    public function getReportPerUnit() {
        return static::query()
            ->select('units.nama AS nama_unit')
            ->selectRaw('COUNT(groups.id) AS count_group')
            ->join('muhaffizhs','muhaffizhs.id','=','groups.muhaffizh_id')
            ->join('units','units.id','=','muhaffizhs.unit_id')
            ->groupBy('nama_unit')
            ->get();
    }

    public function getReportPerMuhaffizh() {
        return static::query()
            ->select('muhaffizhs.nama AS nama_muhaffizh')
            ->selectRaw('COUNT(groups.id) AS count_group')
            ->join('muhaffizhs','muhaffizhs.id','=','groups.muhaffizh_id')
            ->groupBy('muhaffizhs.nama')
            ->get();
    }
}
