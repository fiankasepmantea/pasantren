<?php

use Illuminate\Database\Seeder;
use App\Models\Level;

class LevelTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $models = [
            ['nama' => 'Admin'],
            ['nama' => 'Manajemen'],
            ['nama' => 'Muhaffizh'],
            ['nama' => 'Walisantri'],
            ['nama' => 'Santri'],
        ];

        foreach ($models as $model) {
            Level::updateOrInsert($model, $model);
        }
    }
}
