<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
class OMRequest extends FormRequest
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
            //'so_id' => ['required'],
            //'no_om' => ['required'],
            'followup_id' => ['required'],
            'category_id' => ['required'],
            'model_id' => ['required'],
            'material_id' => ['required'],
            'total_qty' => ['required'],
            'label_id' => ['required'],
            'harga_bordir' => ['required'],
            'harga_saku' => ['required'],
            'tanggal_deadline' => ['required'],
            'bordir_standard' => ['required'],
            'bordir_khusus' => ['required'],         
        ];
    }
}
