<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Arr;

class LevelSantri extends Model
{
    use SoftDeletes;

    protected $table = 'level_santris';
    protected $primaryKey = 'id';
    protected $guarded = [];
}

