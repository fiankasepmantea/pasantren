<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Arr;

class Group extends Model
{
    use SoftDeletes;

    protected $table = 'groups';
    protected $primaryKey = 'id';
    protected $guarded = [];
}
