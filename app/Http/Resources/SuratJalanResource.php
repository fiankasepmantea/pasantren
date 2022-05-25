<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SuratJalanResource extends JsonResource
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
            'delivery_date' => $this->delivery_date,
            'delivery_note_number' => $this->delivery_note_number,
            'om_id'=>$this->om_id,
            'vehicle_registration_number' => $this->vehicle_registration_number,
            'is_active' => $this->is_active,
            'customer' => new OMResource($this->deliveryOM),
            'sales' => new OMResource($this->deliveryOM),
            'no_np_delivery' => new OMResource($this->deliveryOM),
        ];
    }
}
