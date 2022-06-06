<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['namespace' => 'Api'], function () {

    Route::post('auth/login', 'AuthController@login');

    Route::middleware('auth:api')->group(function () {
        Route::post('auth/logout', 'AuthController@logout');
        Route::post('auth/refresh', 'AuthController@refresh');
        Route::post('auth/user', 'AuthController@user');

        Route::apiResources(['user' => 'UserController']);
        Route::get('/user/userlevel', 'UserController@getLevel');
        Route::apiResources(['group' => 'GroupController']);
        Route::apiResources(['unit' => 'UnitController']);
        Route::apiResources(['muhaffizh' => 'MuhaffizhController']);
        Route::get('/muhaffizh/muhaffizhgroup', 'MuhaffizhController@getMuhaffizhGroup');
        Route::get('/muhaffizh/muhaffizhunit', 'MuhaffizhController@getMuhaffizhUnit');
        Route::apiResources(['santri' => 'SantriController']);
        Route::get('/santri/santrigroup', 'SantriController@getSantriGroup');
        Route::get('/santri/santriunit', 'SantriController@getSantriUnit');
        Route::get('/santri/santrigrade', 'SantriController@getSantriGrade');
        Route::get('/santri/santrilevel', 'SantriController@getSantriLevel');
       
    });
});