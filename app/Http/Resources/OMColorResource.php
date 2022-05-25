<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OMColorResource extends JsonResource
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
            'color_id' => $this->color_id,
            'color' => $this->color,
            'model_id' => $this->model_id,
            'color' => $this->color
        ];
    }
}
