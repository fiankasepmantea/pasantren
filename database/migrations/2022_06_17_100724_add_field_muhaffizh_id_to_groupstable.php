<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldMuhaffizhIdToGroupstable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('groups', function (Blueprint $table) {
            $table->foreignId('muhaffizh_id')->nullable();
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
        Schema::table('muhaffizh_id', function (Blueprint $table) {
            $table->dropColumn('muhaffizh_id');
        });
    }
}
