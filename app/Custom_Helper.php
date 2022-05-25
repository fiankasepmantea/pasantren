<?php 
namespace App;
use App\Models\OM;
use App\Models\PPC;
use App\Models\SalesOrder;
use App\Models\SuratJalan;
use Carbon;
use DB;
class Custom_Helper{
	public static function noSO(){
		$count_data = SalesOrder::withTrashed()->count();
		$no_urut = sprintf('%04d', $count_data+1);
        $no_so = 'SO/'.date('Ymd').$no_urut;
        return $no_so;
	}

	public static function noNP(){
		$count_data = PPC::withTrashed()->count();
		$no_urut = sprintf('%04d', $count_data+1);
        $no_np = 'NP/'.date('Ymd').$no_urut;
        return $no_np;
	}
	public static function noOM(){

		$date = \Carbon\Carbon::now();
		$month = $date->format('Y-m'); 
		$first_month = date('Y-m-d',strtotime($month));
		$last_month = $date->format('Y-m-d'); 
		$current_month = OM::whereBetween('created_at', [$first_month.' 00:00:01', $last_month.' 23:59:59'])->count();
		$no_urut = sprintf('%04d', $current_month+1);
        $no_om = 'OM/'.date('Ymd').$no_urut ;

        return $no_om;
	}
	public static function noSuratJalan(){
		$count_data = SuratJalan::withTrashed()->count();
		$no_urut = sprintf('%04d', $count_data+1);
        $no_surat_jalan = 'SRT/'.date('Ymd').$no_urut;
        return $no_surat_jalan;
	}
}
	

?>