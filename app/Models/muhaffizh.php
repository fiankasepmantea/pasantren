<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Arr;

class Muhaffizh extends Model
{
    use SoftDeletes;

    protected $table = 'muhaffizh';
    protected $primaryKey = 'id';
    protected $guarded = [];
}
