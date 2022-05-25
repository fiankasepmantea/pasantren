<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SalesOrderResource extends JsonResource
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
            'no_so' => $this->no_so,
            'no_np' => $this->no_np,
            'tanggal_so' => $this->tanggal_so,
            'customer_id' => $this->customer_id,
            'address' => $this->address,
            'sales_id' => $this->sales_id,
            'tanggal_deadline' => $this->tanggal_deadline,
            'tanggal_kirim' => $this->tanggal_kirim,
            'ppn' => $this->ppn,
            'customer_name'=>$this->customer,
            'sales_name'=>$this->sales,
            'no_np'=>$this->noNP,        
        ];
    }
}
