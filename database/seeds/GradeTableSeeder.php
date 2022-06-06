<?php

use Illuminate\Database\Seeder;
use App\Models\Grade;
class GradeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $models = [
            ['grade' => 'A'],
            ['grade' => 'B'],
            ['grade' => 'C'],
            ['grade' => 'D'],
        ];

        foreach ($models as $model) {
            Grade::updateOrInsert($model, $model);
        }
    }
}
