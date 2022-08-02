<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LevelMenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $LevelMenus = array(
            ['id' => 1, 'level_id' => 2, 'menu_id' => 1, 'can_view' => 1], 
            ['id' => 2, 'level_id' => 2, 'menu_id' => 2, 'can_view' => 1], 
            ['id' => 3, 'level_id' => 2, 'menu_id' => 3, 'can_view' => 1], 
            ['id' => 4, 'level_id' => 2, 'menu_id' => 4, 'can_view' => 1], 
            ['id' => 5, 'level_id' => 2, 'menu_id' => 5, 'can_view' => 1], 
            ['id' => 6, 'level_id' => 2, 'menu_id' => 6, 'can_view' => 1], 
            ['id' => 7, 'level_id' => 2, 'menu_id' => 7, 'can_view' => 1], 
            ['id' => 8, 'level_id' => 2, 'menu_id' => 8, 'can_view' => 1], 
            ['id' => 9, 'level_id' => 2, 'menu_id' => 9, 'can_view' => 1], 
            ['id' => 10, 'level_id' => 2, 'menu_id' => 10, 'can_view' => 1], 
            ['id' => 11, 'level_id' => 2, 'menu_id' => 15, 'can_view' => 1], 
            ['id' => 12, 'level_id' => 2, 'menu_id' => 16, 'can_view' => 1], 
            ['id' => 13, 'level_id' => 2, 'menu_id' => 17, 'can_view' => 1], 
            ['id' => 14, 'level_id' => 2, 'menu_id' => 18, 'can_view' => 1], 
            ['id' => 15, 'level_id' => 2, 'menu_id' => 19, 'can_view' => 1], 
            ['id' => 16, 'level_id' => 2, 'menu_id' => 20, 'can_view' => 1], 
            ['id' => 21, 'level_id' => 3, 'menu_id' => 1, 'can_view' => 1], 
            ['id' => 22, 'level_id' => 3, 'menu_id' => 2, 'can_view' => 1], 
            ['id' => 23, 'level_id' => 3, 'menu_id' => 3, 'can_view' => 1], 
            ['id' => 24, 'level_id' => 3, 'menu_id' => 11, 'can_view' => 1], 
            ['id' => 25, 'level_id' => 3, 'menu_id' => 12, 'can_view' => 1], 
            ['id' => 26, 'level_id' => 3, 'menu_id' => 13, 'can_view' => 1], 
            ['id' => 27, 'level_id' => 3, 'menu_id' => 14, 'can_view' => 1], 
            ['id' => 28, 'level_id' => 4, 'menu_id' => 1, 'can_view' => 1], 
            ['id' => 29, 'level_id' => 4, 'menu_id' => 2, 'can_view' => 1], 
            ['id' => 30, 'level_id' => 4, 'menu_id' => 3, 'can_view' => 1], 
            ['id' => 31, 'level_id' => 4, 'menu_id' => 15, 'can_view' => 1], 
            ['id' => 32, 'level_id' => 4, 'menu_id' => 16, 'can_view' => 1], 
            ['id' => 33, 'level_id' => 4, 'menu_id' => 17, 'can_view' => 1], 
            ['id' => 34, 'level_id' => 4, 'menu_id' => 18, 'can_view' => 1], 
            ['id' => 35, 'level_id' => 4, 'menu_id' => 19, 'can_view' => 1], 
            ['id' => 36, 'level_id' => 4, 'menu_id' => 20, 'can_view' => 1]
        );

        DB::table('level_menus')->insert($LevelMenus);
    }
}
