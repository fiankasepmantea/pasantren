<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ClothingModelResource extends JsonResource
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
            'category_id' => $this->category_id,
            'nama_model' => $this->nama_model,
            'material_id' => $this->material_id,
            'kategori'=>$this->category,
            'bahan'=>$this->material,
        ];
    }
}
