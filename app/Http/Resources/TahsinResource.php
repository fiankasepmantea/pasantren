<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class TahsinResource extends JsonResource
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
            'santri_id'             => $this->santri_id,
            'muhaffizh_id'          => $this->muhaffizh_id,
            'buku'                  => $this->buku,
            'halaman'               => $this->halaman,
            'sertifikat_proses'     => $this->sertifikat_proses,
            'group_id'              => $this->group_id,
            'updated_at'            => Carbon::parse($this->updated_at)->format('d, M Y H:i'),
            //from controller
            'list_group'        => $this->listGroup,
            'list_santri'       => $this->listSantri,
            'list_muhaffizh'    => $this->listMuhaffizh
        ];
    }
}
