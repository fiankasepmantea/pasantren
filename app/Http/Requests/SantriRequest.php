<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class SantriRequest extends FormRequest
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
            'mulai_belajar'         => ['required'],
            'angkatan_kelas'        => ['required'],
            'nama_ibu'              => ['required'],
            'nama_ayah'             => ['required'],
            'group_id'              => ['required'],
            'muhaffizh_id'          => ['required'],
            'grade_id'              => ['required'],
            'levelsantri_id'        => ['required'],
            'user_id'               => ['required'], //muhaffizh_id
        ];
    }
}
