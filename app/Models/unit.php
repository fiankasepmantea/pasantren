<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Arr;

class Unit extends Model
{
    use SoftDeletes;

    protected $table = 'units';
    protected $primaryKey = 'id';
    protected $guarded = [];
}
