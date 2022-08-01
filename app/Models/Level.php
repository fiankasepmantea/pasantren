<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Menu;

class Level extends Model
{
    protected $table = 'levels';
    protected $primaryKey = 'id';
    protected $guarded = [];

    public function menus(){
        return $this->belongsToMany(Menu::class,'level_menus','level_id','menu_id');
    }
}
