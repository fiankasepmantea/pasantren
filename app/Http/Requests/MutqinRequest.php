<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class MutqinRequest extends FormRequest
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
            'juz'                   => ['required'],
            'halaman'               => ['required'],
            'baris'                 => ['required'],
            'muhaffizh_id'          => ['required'],
            'group_id'              => ['required'],
            'santri_id'             => ['required'],
            'pekan'                 => ['required'],
        ];
    }
}
