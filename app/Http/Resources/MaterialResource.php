<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MaterialResource extends JsonResource
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
            'nama' => $this->nama,
            'pieces_id' => $this->pieces_id,
            'harga_jual' => $this->harga_jual,
            'satuan'=>$this->pieces // take from function pieces of model
        ];
    }
}
