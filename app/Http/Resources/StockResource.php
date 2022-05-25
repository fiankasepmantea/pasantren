<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StockResource extends JsonResource
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
            'om_id' => $this->om_id,
            'department_id' => $this->department_id,
            'om_packing_id' => $this->om_packing_id,
            'omcolors_id' => $this->omcolors_id,
            'omsizes_id' => $this->omsizes_id,
            'quantity' => $this->quantity,
            'note' => $this->note,
            'stockcolor' => new OMColorResource($this->stockColor),
            'stocksize' => new OMSizeResource($this->stockSize),
            'stockmaterialbahan' => new OMResource($this->stockMaterialModel),
        ];
    }
}
