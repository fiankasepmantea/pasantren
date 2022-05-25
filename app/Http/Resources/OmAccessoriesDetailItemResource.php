<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OmAccessoriesDetailItemResource extends JsonResource
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
            'om_accessories_detail_id' => $this->om_accessories_detail_id,
            'accessories_id' => $this->accessories_id,
            'quantity' => $this->quantity,
            'accessories' => $this->accessories
        ];
    }
}
