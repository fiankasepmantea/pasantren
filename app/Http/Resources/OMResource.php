<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OMResource extends JsonResource
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
            'created_at' => date('Y-m-d',strtotime($this->created_at)),
            'so_id' => $this->so_id,
            'no_om' => $this->no_om,
            'followup_id' => $this->followup_id,
            'category_id' => $this->category_id,
            'model_id' => $this->model_id,
            'material_id' => $this->material_id,
            'total_qty' => $this->total_qty,
            'label_id' => $this->label_id,
            'harga_bordir' => $this->harga_bordir,
            'harga_saku' => $this->harga_saku,
            'tanggal_deadline' => $this->tanggal_deadline,
            'bordir_standard' => $this->bordir_standard,
            'bordir_khusus' => $this->bordir_khusus,
            'kelompok_harga_id' => $this->kelompok_harga_id,
            'followup_name' => $this->followup,
            'category_name' => $this->category,
            'model_name' => $this->model,
            'material_name' => $this->material,
            'color_name' => OMColorResource::collection($this->omColor),
            'size_name' => OMSizeResource::collection($this->omSize),
            'quantity' => OMSizeResource::collection($this->omSizeQuantity),
            'customer' => new SalesOrderResource($this->omCustomer),
            'sales' => new SalesOrderResource($this->omCustomer),
            'so_name' => $this->omSO,
        ];
    }
}
