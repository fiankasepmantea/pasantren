<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Arr;

class grade extends Model
{
    use SoftDeletes;

    protected $table = 'grades';
    protected $primaryKey = 'id';
    protected $guarded = [];
}
