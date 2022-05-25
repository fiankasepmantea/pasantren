<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'name' => $this->name,
            'nik' => $this->nik,
            'username'=>$this->username,
            'password'=>$this->password,
            'level_id'=>$this->level_id,
            'departement_id' => $this->departement_id,
            'depar'=>$this->departement,
            'user_level'=>$this->userLevel
        ];
    }
}
