<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Setoran as Model;

class DashboardController extends Controller
{
    public function getChartData(Request $req, Model $setoran) {
        $result = array('message'=>'','dataset'=>array(),'labels'=>array());
        $m_setoran = $setoran->getModel([],true);
        $rows = $m_setoran->select('pekan,bulan')
            ->selectRaw('COUNT(juz) AS total_juz')
            ->groupBy('pekan,bulan')
            ->get();
        $result['dataset'] = $rows;
        return response()->json($result);
    }
}
