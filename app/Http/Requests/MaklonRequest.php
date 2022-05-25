<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
class MaklonRequest extends FormRequest
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
            'nama' => ['required'],
            'province_id' => ['required'],
            'regency_id' => ['required'],
            'post_code' => ['required'],
            'address' => ['required'],
            'phone' => ['required'],
            'bank_id' => ['required'],
            'no_rekening' => ['required'],
            'pic_name' => ['required'],
            
        ];
    }
}
