<?php

namespace App;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Arr;
use App\Models\Level;
use Illuminate\Database\Eloquent\Builder;
class User extends Authenticatable implements JWTSubject
{
    use Notifiable;
    use SoftDeletes;

    protected $table = 'users';
    protected $primaryKey = 'id';
    protected $guarded = [];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'api_token'
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
    
    public static function getModel($params, $raw = false)
    {
        $modelQuery = static::query();

        if ( ($filter_customer_name = Arr::get($params, 'customer_name', false)) ) {
            $modelQuery->whereHas('userFollowUp', function (Builder $query) use ($filter_customer_name) {
                $query->where('name', 'LIKE', '%' . $filter_customer_name . '%');
            });
        }


        if ( ($begin_date = Arr::get($params, 'begin_date', false)) && ($end_date = Arr::get($params, 'end_date', false)) ) {
            $modelQuery->whereBetween('created_at', [$begin_date . ' 00:00:00', $end_date . ' 23:59:59']);
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
        
        $model['name'] = ucwords($data['name']);
        $model['username'] = $data['username'];
        $model['level_id'] = ucwords($data['level_id']);
        $model['password'] = bcrypt($data['password']);

        return $is_update ? $this->update($model) : $this->create($model);
    }
    public function userLevel(){
        return $this->belongsTo(Level::class,'level_id','id');
    }
    public function userFollowUp(){
        return $this->belongsTo(OM::class,'id','followup_id');
    }
}
