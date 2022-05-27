<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RelationSetoranToMuhaffizh extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('setorans', function (Blueprint $table) {
            $table->foreign('muhaffizh_id')->references('id')->on('muhaffizhs')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('setorans', function (Blueprint $table) {
            $table->dropColumn('muhaffizh_id');
        });
    }
}
