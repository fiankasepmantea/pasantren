<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OmCuttingDetailResource extends JsonResource
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
            'om_cutting_id' => $this->om_cutting_id,
            'omcolors_id' => $this->omcolors_id,
            'omsizes_id' => $this->omsizes_id,
            'omcolors' => new OMColorResource($this->omcolor),
            'omsize' => new OMSizeResource($this->omsize),
            'quantity' => $this->quantity,
            'note' => $this->note,
            'total_waste' => $this->total_waste,
        ];
    }
}
