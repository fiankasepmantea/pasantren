<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TailorResource extends JsonResource
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
            'id' => $this->id,
            'departement_id' => $this->departement_id,
            'nama' => $this->nama,
            'depar'=>$this->departement
        ];
    }
}
