<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTahsinsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tahsins', function (Blueprint $table) {
            $table->id('id');
            $table->foreignId('santri_id')->nullable();
            $table->foreignId('muhaffizh_id')->nullable();
            $table->string('buku');
            $table->string('halaman');
            $table->date('tanggal_update');
            $table->string('sertifikat_proses');
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
        Schema::dropIfExists('tahsins');
    }
}
