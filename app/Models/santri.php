<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\Santri as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Arr;
use App\Models\Muhaffizh;
use App\Models\Group;
use App\Models\Grade;
use App\Models\LevelSantri;

class Santri extends Model
{
    use SoftDeletes;

    protected $table = 'santris';
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
        $model['gender'] = $data['gender'];
        $model['no_hp'] = $data['no_hp'];
        $model['nama_ibu'] = ucwords($data['nama_ibu']);
        $model['nama_ayah'] = ucwords($data['nama_ayah']);
        $model['mulai_belajar'] = $data['mulai_belajar'];
        $model['angkatan_kelas'] = $data['angkatan_kelas'];
        $model['group_id'] = $data['group_id'];
        $model['muhaffizh_id'] = $data['muhaffizh_id'];
        $model['grade_id'] = $data['grade_id'];
        $model['levelsantri_id'] = $data['levelsantri_id'];
     
        return $is_update ? $this->update($model) : $this->create($model);
    }   

    public function santriMuhaffizh(){
        return $this->belongsTo(Muhaffizh::class,'muhaffizh_id','id');
    }
    public function santriGroup(){
        return $this->belongsTo(Group::class,'group_id','id');
    }
    public function santriGrade(){
        return $this->belongsTo(Grade::class,'grade_id','id');
    }
    public function santriLevel(){
        return $this->belongsTo(LevelSantri::class,'levelsantri_id','id');
    }
    //list
    public function listMuhaffizh(){
        return $this->belongsTo(Muhaffizh::class,'muhaffizh_id','id');
    }
    public function listGroup(){
        return $this->belongsTo(Group::class,'group_id','id');
    }
    public function listGrade(){
        return $this->belongsTo(Grade::class,'grade_id','id');
    }
    public function listLevel(){
        return $this->belongsTo(LevelSantri::class,'levelsantri_id','id');
    }

    // Group per nama santri (Nama, Nik, Unit, hapalan , mutqin, buku)
    public function getReportDetail() {
        return static::query()
            ->select('santris.nama','nomor_induk','units.nama AS nama_unit')
            ->selectRaw("
                CONCAT(SUM(mutqins.juz),' Juz') AS hapalan
                ,CONCAT(SUM(mutqins.juz),' Juz',SUM(mutqins.halaman),' Hal.') AS mutqin
                ,CONCAT(SUM(mutqins.baris),' Baris') AS buku
            ")
            ->join('units','units.id','=','santris.unit_id')
            ->leftJoin('mutqins','santris.id','=','mutqins.santri_id')
            ->groupBy("santris.nama","nomor_induk","nama_unit")
            ->get();
    }
    // Group Jml.Santri per Unit (Unit, Jml.Santri)
    public function getReportJmlPerUnit() {
        return static::query()
            ->select('units.nama AS nama_unit')
            ->selectRaw('COUNT(santris.id) AS count_santri')
            ->join('units','units.id','=','santris.unit_id')
            ->groupBy('nama_unit')
            ->get();
    }
    // Group Jml.Santri per Gender (Gender, Jml.Santri)
    public function getReportPerGender() {
        return static::query()
            ->select('gender')
            ->selectRaw('COUNT(id) AS count_santri')
            ->groupBy('gender')
            ->get();
    }
}
