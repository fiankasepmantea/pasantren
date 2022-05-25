<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMuhaffizhsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('muhaffizhs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nomor_induk');
            $table->string('nama');
            $table->text('alamat');
            $table->string('tempat_lahir');
            $table->date('tanggal_lahir');
            $table->string('nama_ayah');
            $table->string('nama_ibu');
            $table->string('no_hp');
            $table->date('mulai_belajar');
            $table->string('angkatan_kelas');
            $table->foreignId('group_id')->nullable();
            $table->foreignId('unit_id')->nullable();
            $table->foreignId('grade_id')->nullable();
            $table->foreignId('level_id')->nullable();
            $table->foreignId('walisantri_id')->nullable();
            $table->timestamps();
            $table->softDeletes('deleted_at', 0);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('muhaffizhs');
    }
}
