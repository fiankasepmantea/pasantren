<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OMSizeResource extends JsonResource
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
            'size_id' => $this->size_id,
            'size' => $this->size,
            'qty' => $this->qty,
            'model_id' => $this->model_id,
            'size' => $this->size
        ];
    }
}
