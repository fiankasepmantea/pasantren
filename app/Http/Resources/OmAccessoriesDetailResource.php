<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OmAccessoriesDetailResource extends JsonResource
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
            'om_accessories_id' => $this->om_accessories_id,
            'omcolors_id' => $this->omcolors_id,
            'omsizes_id' => $this->omsizes_id,
            'quantity' => $this->quantity,
            'note' => $this->note,
            'omcolors' => new OMColorResource($this->omcolor),
            'omsize' => new OMSizeResource($this->omsize),
            'om_accessories_detail_item' => OmAccessoriesDetailItemResource::collection($this->om_accessories_detail_item)
        ];
    }
}
