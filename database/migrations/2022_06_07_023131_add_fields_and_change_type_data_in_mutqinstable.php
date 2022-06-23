<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsAndChangeTypeDataInMutqinstable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('mutqins', function (Blueprint $table) {
            $table->dropColumn('tanggal_update');
            $table->smallInteger('juz')->change();
            $table->smallInteger('halaman')->change();
            $table->smallInteger('baris')->change();
            $table->foreignId('group_id')->nullable();
            $table->string('total_mutqin')->after('baris');
            $table->foreign('group_id')->references('id')->on('groups')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('mutqins', function (Blueprint $table) {
            $table->dropColumn('unit_id');
            $table->dropColumn('group_id');
        });
    }
}
