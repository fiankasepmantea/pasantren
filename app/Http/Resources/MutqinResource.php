<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MutqinResource extends JsonResource
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
            'juz'                   => $this->juz,
            'halaman'               => $this->halaman,
            'baris'                 => $this->baris,
            'total_mutqin'          => $this->total_mutqin,
            'group_id'              => $this->group_id,
            'updated_at'            => date('d M Y H:i:s',strtotime($this->updated_at)),
            //from controller
            'relation_group'        => $this->relationGroup,
            'relation_santri'       => $this->relationSantri,
            'relation_muhaffizh'    => $this->relationMuhaffizh
        ];
    }
}
