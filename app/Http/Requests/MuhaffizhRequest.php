<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class MuhaffizhRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
         return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nomor_induk'           => ['required'],
            'nama'                  => ['required'],
            'alamat'                => ['required'],
            'tempat_lahir'          => ['required'],
            'tanggal_lahir'         => ['required'],
            'no_hp'                 => ['required'],
            'mulai_bertugas'        => ['required'],
            'angkatan_kelas'        => ['required'],
            'status'                => ['required'],
            'pendidikan_terakhir'   => ['required'],
            'unit_id'               => ['required'],
        ];
    }
}
