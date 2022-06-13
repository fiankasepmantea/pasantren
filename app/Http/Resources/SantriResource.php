<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SantriResource extends JsonResource
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
            'mulai_belajar'         => $this->mulai_belajar,
            'angkatan_kelas'        => $this->angkatan_kelas,
            'nama_ibu'              => $this->nama_ibu,
            'nama_ayah'             => $this->nama_ayah,
            'group_id'              => $this->group_id,
            'muhaffizh_id'          => $this->muhaffizh_id,
            'grade_id'              => $this->grade_id,
            'levelsantri_id'        => $this->levelsantri_id,
          
            //from controller
            'list_muhaffizh'        => $this->listMuhaffizh,
            'list_group'            => $this->listGroup,
            'list_grade'            => $this->listGrade,
            'list_level'            => $this->listLevel
        ];
    }
}
