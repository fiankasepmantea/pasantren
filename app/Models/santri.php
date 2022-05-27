<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Arr;


class Santri extends Model
{
    use SoftDeletes;

    protected $table = 'santris';
    protected $primaryKey = 'id';
    protected $guarded = [];
}
