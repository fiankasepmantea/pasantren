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
            $table->id('id');
            $table->string('nomor_induk');
            $table->string('nama');
            $table->text('alamat');
            $table->string('tempat_lahir');
            $table->date('tanggal_lahir');
            $table->string('no_hp');
            $table->enum('pendidikan_terakhir',['D3','S1','S2','S3']);
            $table->date('mulai_bertugas');
            $table->string('angkatan_kelas');
            $table->enum('status',['Aktif','Tidak Aktif']);
            $table->foreignId('unit_id')->nullable();
            $table->timestamps();
            $table->softDeletes('deleted_at', 0);

            $table->foreign('unit_id')->references('id')->on('units')->onDelete('cascade')->onUpdate('cascade');
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
