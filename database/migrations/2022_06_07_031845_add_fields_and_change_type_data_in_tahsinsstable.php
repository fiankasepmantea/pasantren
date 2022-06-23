<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsAndChangeTypeDataInTahsinsstable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tahsins', function (Blueprint $table) {
            $table->dropColumn('tanggal_update');
            $table->smallInteger('halaman')->change();
            $table->foreignId('group_id')->nullable();
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
        Schema::table('tahsinsstable', function (Blueprint $table) {
            $table->dropColumn('unit_id');
            $table->dropColumn('group_id');
        });
    }
}
