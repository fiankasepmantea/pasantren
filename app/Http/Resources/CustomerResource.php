<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CustomerResource extends JsonResource
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
            'nama' => $this->nama,
            'province_id' => $this->province_id,
            'regency_id' => $this->regency_id,
            'post_code' => $this->post_code,
            'address' => $this->address,
            'phone' => $this->phone,
            'no_rekening' => $this->no_rekening,
            'pic_name' => $this->pic_name,
            'sales_id' => $this->sales_id,
            'limit_credit' => $this->limit_credit,
        ];
    }
}
