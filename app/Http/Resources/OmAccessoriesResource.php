<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OmAccessoriesResource extends JsonResource
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
            'is_active' => $this->is_active,
            'ready_to_proceed' => $this->ready_to_proceed,
            'created_date' => date('d-m-Y', strtotime($this->created_at)),
            'om' => new OMResource($this->om),
            'department' => $this->department,
            'om_accessories_detail' => OmAccessoriesDetailResource::collection($this->om_accessories_detail)
        ];
    }
}
