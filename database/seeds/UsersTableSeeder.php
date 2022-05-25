<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $models = [
            [
                'name' => 'admin',
                'username' => 'admin',
                'password' => bcrypt('admin'),
                'role' => 1
            ],
            [
                'name' => 'manajemen',
                'username' => 'manajemen',
                'password' => bcrypt('manajemen'),
                'role' => 2
            ],
            [
                'name' => 'muhaffizh',
                'username' => 'admin',
                'password' => bcrypt('admin'),
                'role' => 3
            ],
            [
                'name' => 'walisantri',
                'username' => 'walisantri',
                'password' => bcrypt('walisantri'),
                'role' => 4
            ],
            [
                'name' => 'santri',
                'username' => 'santri',
                'password' => bcrypt('santri'),
                'role' => 5
            ],

           
        ];

        foreach ($models as $model) {
            User::updateOrInsert($model, $model);
        }
    }
}
