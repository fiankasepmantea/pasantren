<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Setoran as Model;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function getChartSetoran(Request $req) {
        $result = array('message'=>'','series'=>array(),'labels'=>array());
        $dsname = $req->query('ds');
        // valid dataset names
        if(!in_array($dsname, ['TotalSetorJuz','SetoranUnit','SetoranMuhaffizh','SetoranGroup'])) {
            $result['message'] = "Invalid Dataset $dsname";
            return response()->json($result,404);
        }
        $method = 'get'.$dsname;
        $result = $this->$method();
        return response()->json($result);
    }

    private function getTotalSetorJuz() {
        $result = array('message'=>'','series'=>array(),'labels'=>array());
        $setoran = new Model();
        $m_setoran = $setoran->getModel([],true);
        // Reset default orderBy (created_at) krn mw sort by bulan & pekan..
        $m_setoran->getQuery()->orders = null;
        // Ada baiknya subquery namabulan (nb) diganti tabel fisik
        $rows = $m_setoran->select('setorans.bulan','bln','pekan')
            ->selectRaw('FLOOR(SUM(juz)+(SUM(halaman)/20)+(SUM(baris)/300)) AS total_juz')
            ->joinSub("
                  SELECT 'januari' AS bulan,1 AS bln UNION SELECT 'februari',2 UNION
                  SELECT 'maret',3 UNION SELECT 'april',4 UNION
                  SELECT 'mei',5 UNION SELECT 'juni',6 UNION
                  SELECT 'juli',7 UNION SELECT 'agustus',8 UNION
                  SELECT 'september',9 UNION SELECT 'oktober',10 UNION
                  SELECT 'november',11 UNION SELECT 'desember',12
              ",'nb','nb.bulan','=',DB::raw('UPPER(setorans.bulan)'))
            ->whereDate('created_at','>=',date('Y-m-d',strtotime('-6 month')))
            ->groupBy('bulan','bln','pekan')->orderBy('bln')->orderBy('pekan')
            ->get();
        foreach ($rows as $r) {
            $result['series'][] = $r->total_juz;
            $result['labels'][] = $r->bulan.'-'.$r->pekan;
        }
        // Mockdata (klo db msh sepi, biar keren..)
        /*$result['labels'] = ['Mei-2','Mei-3','Mei-4','Juni-1','Juni-2','Juni-3','Juni-4','Juli-1','Juli-2','Juli-3','Juli-4','Juli-5'
            ,'Agustus-1','Agustus-2','Agustus-3','Agustus-4'];
        for($i=0; $i<count($result['labels']);$i++) {
            $result['series'][] = floor(rand(0,30));
        }*/
        return $result;
    }

    private function getSetoranUnit() {
        $result = array('message'=>'','series'=>array(),'labels'=>array());
        $setoran = new Model();
        $m_setoran = $setoran->getModel([],true);
        $m_setoran->getQuery()->orders = null;
        $rows = $m_setoran->select('units.id','units.nama')
            ->selectRaw('FLOOR(SUM(juz)+(SUM(halaman)/20)+(SUM(baris)/300)) AS total_juz')
            ->join('muhaffizhs','setorans.muhaffizh_id','=','muhaffizhs.id')
            ->join('units','muhaffizhs.unit_id','=','units.id')
            ->whereDate('setorans.created_at','>=',date('Y-m-d',strtotime('-6 month')))
            ->groupBy('units.id','units.nama')->orderBy('units.id')
            ->get();
        foreach ($rows as $r) {
            $result['series'][] = (int) $r->total_juz;
            $result['labels'][] = $r->nama;
        }
        return $result;
    }

    private function getSetoranMuhaffizh() {
        $result = array('message'=>'','series'=>array(),'labels'=>array());
        $setoran = new Model();
        $m_setoran = $setoran->getModel([],true);
        $m_setoran->getQuery()->orders = null;
        $rows = $m_setoran->select('muhaffizhs.id','muhaffizhs.nama')
            ->selectRaw('FLOOR(SUM(juz)+(SUM(halaman)/20)+(SUM(baris)/300)) AS total_juz')
            ->join('muhaffizhs','setorans.muhaffizh_id','=','muhaffizhs.id')
            ->whereDate('setorans.created_at','>=',date('Y-m-d',strtotime('-6 month')))
            ->groupBy('muhaffizhs.id','muhaffizhs.nama')->orderBy('muhaffizhs.nama')
            ->get();
        foreach ($rows as $r) {
            $result['series'][] = (int) $r->total_juz;
            $result['labels'][] = $r->nama;
        }
        return $result;
    }

    private function getSetoranGroup() {
        $result = array('message'=>'','series'=>array(),'labels'=>array());
        $setoran = new Model();
        $m_setoran = $setoran->getModel([],true);
        $m_setoran->getQuery()->orders = null;
        $rows = $m_setoran->select('groups.id','groups.nama')
            ->selectRaw('FLOOR(SUM(juz)+(SUM(halaman)/20)+(SUM(baris)/300)) AS total_juz')
            ->join('groups','setorans.group_id','=','groups.id')
            ->whereDate('setorans.created_at','>=',date('Y-m-d',strtotime('-6 month')))
            ->groupBy('groups.id','groups.nama')->orderBy('groups.nama')
            ->get();
        foreach ($rows as $r) {
            $result['series'][] = (int) $r->total_juz;
            $result['labels'][] = $r->nama;
        }
        return $result;
    }
}
