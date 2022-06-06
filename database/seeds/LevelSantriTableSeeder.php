<?php

use Illuminate\Database\Seeder;
use App\Models\LevelSantri;
class LevelSantriTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $models = [
            ['level' => '1'],
            ['level' => '2'],
            ['level' => '3'],
            ['level' => '4'],
            ['level' => '5'],
            ['level' => '6'],
            ['level' => '7'],
            ['level' => '8'],
            ['level' => '9'],
            ['level' => '10'],
        ];

        foreach ($models as $model) {
            LevelSantri::updateOrInsert($model, $model);
        }
    }
}
