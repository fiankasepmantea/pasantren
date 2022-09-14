<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MuhaffizhResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'                    => $this->id,
            'nomor_induk'           => $this->nomor_induk,
            'nama'                  => $this->nama,
            'alamat'                => $this->alamat,
            'tempat_lahir'          => $this->tempat_lahir,
            'tanggal_lahir'         => $this->tanggal_lahir,
            'no_hp'                 => $this->no_hp,
            'mulai_bertugas'        => $this->mulai_bertugas,
            'angkatan_kelas'        => $this->angkatan_kelas,
            'status'                => $this->status,
            'pendidikan_terakhir'   => $this->pendidikan_terakhir,
            'unit_id'               => $this->unit_id,
            'user_id'               => $this->user_id,
            //from controller
            'list_unit'         => $this->listUnit,
            'list_group'        => $this->listGroup
        ];
    }
}
