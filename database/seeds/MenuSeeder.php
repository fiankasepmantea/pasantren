<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $menus = array(
            ['id'=>1,'title'=>'DASHBOARDS','path'=>'','icon'=>'','parent_id'=>null,'sublevel'=>0,'order'=>100],
            ['id'=>2,'title'=>'Grafik Santri','path'=>'/santri-grafik','icon'=>'cil-speedometer','parent_id'=>1,'sublevel'=>1,'order'=>110],
            // ['id'=>3,'title'=>'Santri','path'=>'/santri','icon'=>'cil-speedometer','parent_id'=>1,'sublevel'=>1,'order'=>120],
            ['id'=>4,'title'=>'MASTER DATA','path'=>'','icon'=>'','parent_id'=>null,'sublevel'=>0,'order'=>200],
            ['id'=>5,'title'=>'Master Data','path'=>'','icon'=>'cil-puzzle','parent_id'=>4,'sublevel'=>1,'order'=>210],
            ['id'=>6,'title'=>'Manajemen User','path'=>'/master/user','icon'=>'','parent_id'=>5,'sublevel'=>2,'order'=>211],
            ['id'=>7,'title'=>'Unit','path'=>'/master/unit','icon'=>'','parent_id'=>5,'sublevel'=>2,'order'=>212],
            ['id'=>8,'title'=>'Muhaffizh','path'=>'/master/muhaffizh','icon'=>'','parent_id'=>5,'sublevel'=>2,'order'=>213],
            ['id'=>9,'title'=>'Group','path'=>'/master/group','icon'=>'','parent_id'=>5,'sublevel'=>2,'order'=>214],
            ['id'=>10,'title'=>'Santri','path'=>'/master/santri','icon'=>'','parent_id'=>5,'sublevel'=>2,'order'=>215],
            ['id'=>11,'title'=>'Proses Santri','path'=>'','icon'=>'cil-puzzle','parent_id'=>4,'sublevel'=>1,'order'=>310],
            ['id'=>12,'title'=>'Mutqin','path'=>'/process/mutqin','icon'=>'','parent_id'=>11,'sublevel'=>2,'order'=>311],
            ['id'=>13,'title'=>'Setoran','path'=>'/process/setoran','icon'=>'','parent_id'=>11,'sublevel'=>2,'order'=>312],
            ['id'=>14,'title'=>'Tahsin','path'=>'/process/tahsin','icon'=>'','parent_id'=>11,'sublevel'=>2,'order'=>313],
            ['id'=>15,'title'=>'LAPORAN','path'=>'','icon'=>'','parent_id'=>null,'sublevel'=>0,'order'=>400],
            ['id'=>16,'title'=>'Laporan','path'=>'','icon'=>'cil-book','parent_id'=>15,'sublevel'=>1,'order'=>410],
            ['id'=>17,'title'=>'List Group/Halaqoh','path'=>'/laporan/halaqoh','icon'=>'','parent_id'=>16,'sublevel'=>2,'order'=>411],
            ['id'=>18,'title'=>'List Muhaffizh','path'=>'/laporan/muhaffizh','icon'=>'','parent_id'=>16,'sublevel'=>2,'order'=>412],
            ['id'=>19,'title'=>'List Santri','path'=>'/laporan/santri','icon'=>'','parent_id'=>16,'sublevel'=>2,'order'=>413],
            ['id'=>20,'title'=>'Setoran Juz','path'=>'/laporan/setoran','icon'=>'','parent_id'=>16,'sublevel'=>2,'order'=>414]
        );

        DB::table('menus')->insert($menus);
    }
}
