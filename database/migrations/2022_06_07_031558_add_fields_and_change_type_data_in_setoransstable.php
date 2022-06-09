<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsAndChangeTypeDataInSetoransstable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('setorans', function (Blueprint $table) {
            $table->dropColumn('tanggal_update');
            $table->smallInteger('juz')->change();
            $table->smallInteger('halaman')->change();
            $table->smallInteger('baris')->change();
            $table->foreignId('unit_id')->nullable();
            $table->foreignId('group_id')->nullable();
            $table->string('total_setoran')->after('baris');
            $table->foreign('unit_id')->references('id')->on('units')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::table('setorans', function (Blueprint $table) {
            $table->dropColumn('unit_id');
            $table->dropColumn('group_id');
        });
    }
}
