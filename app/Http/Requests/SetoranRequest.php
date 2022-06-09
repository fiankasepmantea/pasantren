<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class SetoranRequest extends FormRequest
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
            'total_setoran'          => ['required'],
            'group_id'              => ['required'],
        ];
    }
}
