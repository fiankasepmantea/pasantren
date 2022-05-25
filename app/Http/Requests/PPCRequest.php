<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
class PPCRequest extends FormRequest
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
            'sales_id' => ['required'],
            'tanggal_ppc' => ['required'],
            'so_id' => ['required'],
            //'no_np' => ['required'],
            'customer_id' => ['required'],
            
        ];
    }
}
