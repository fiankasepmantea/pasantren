<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
class SalesOrderRequest extends FormRequest
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
            // 'no_so' => ['required'],
            // 'no_np' => ['required'],
            'tanggal_so' => ['required'],
            'customer_id' => ['required'],
            'address' => ['required'],
            'sales_id' => ['required'],
            'tanggal_deadline' => ['required'],
            'tanggal_kirim' => ['required'],
            'ppn' => ['required'],
        ];
    }
}
