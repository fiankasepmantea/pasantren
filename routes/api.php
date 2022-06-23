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

        Route::get('/user/userlevel', 'UserController@getLevel');
        Route::get('/group/groupmuhaffizh', 'GroupController@getGroupMuhaffizh');
        Route::get('/muhaffizh/muhaffizhgroup', 'MuhaffizhController@getMuhaffizhGroup');
        Route::get('/muhaffizh/muhaffizhunit', 'MuhaffizhController@getMuhaffizhUnit');
        Route::get('/santri/santrigroup', 'SantriController@getSantriGroup');
        Route::get('/santri/santrimuhaffizh', 'SantriController@getSantriMuhaffizh');
        Route::get('/santri/santrigrade', 'SantriController@getSantriGrade');
        Route::get('/santri/santrilevel', 'SantriController@getSantriLevel');
        Route::get('/mutqin/mutqinmuhaffizh', 'MutqinController@getMutqinMuhaffizh');
        Route::get('/mutqin/mutqingroup', 'MutqinController@getMutqinGroup');
        Route::get('/mutqin/mutqinsantri', 'MutqinController@getMutqinSantri');
        Route::get('/setoran/setoranmuhaffizh', 'SetoranController@getSetoranMuhaffizh');
        Route::get('/setoran/setorangroup', 'SetoranController@getSetoranGroup');
        Route::get('/setoran/setoransantri', 'SetoranController@getSetoranSantri');
        Route::get('/tahsin/tahsingroup', 'TahsinController@getTahsinGroup');
        Route::get('/tahsin/tahsinsantri', 'TahsinController@getTahsinSantri');
        Route::get('/tahsin/tahsinmuhaffizh', 'TahsinController@getTahsinMuhaffizh');
        
        Route::apiResources(['user' => 'UserController']);
        Route::apiResources(['group' => 'GroupController']);
        Route::apiResources(['unit' => 'UnitController']);
        Route::apiResources(['muhaffizh' => 'MuhaffizhController']);
        Route::apiResources(['santri' => 'SantriController']);
        Route::apiResources(['mutqin' => 'MutqinController']);
        Route::apiResources(['setoran' => 'SetoranController']); 
        Route::apiResources(['tahsin' => 'TahsinController']); 
    }); 
});