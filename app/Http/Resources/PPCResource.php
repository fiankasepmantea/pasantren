<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PPCResource extends JsonResource
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
            'tanggal_ppc' => $this->tanggal_ppc,
            'so_id' => $this->so_id,
            'no_np' => $this->no_np,
            'so_id' => $this->so_id,
            'customer_id' => $this->customer_id,
            'sales_id' => $this->sales_id,
            'so'=>$this->so_name,
            'customer_name'=>$this->customer,
            'sales_name'=>$this->sales
        ];
    }
}
