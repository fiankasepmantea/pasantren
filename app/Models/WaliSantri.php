<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Arr;

class WaliSantri extends Model
{
    use SoftDeletes;

    protected $table = 'wali_santris';
    protected $primaryKey = 'id';
    protected $guarded = [];
}
