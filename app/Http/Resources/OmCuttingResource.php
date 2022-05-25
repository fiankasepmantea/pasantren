<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OmCuttingResource extends JsonResource
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
            'om' => new OMResource($this->om),
            'department' => $this->department,
            'om_cutting_detail' => OMCuttingDetailResource::collection($this->om_cutting_detail),
            'created_date' => date('d-m-Y', strtotime($this->created_at)),
            'ready_to_proceed' => $this->ready_to_proceed,
            'is_active' => $this->is_active
        ];
    }
}
