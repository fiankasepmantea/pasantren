<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Arr;

class Mutqin extends Model
{
    use SoftDeletes;

    protected $table = 'mutqins';
    protected $primaryKey = 'id';
    protected $guarded = [];
}
