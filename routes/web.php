<?php
// phpcs:disable
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'PageController@indexHome');
Route::get('/{slug}', 'PageController@getPage');

Route::get('/admin/dashboard', 'Admin\DashboardController@index');
Route::post('/admin/updateEducation', 'Admin\DashboardController@updateEducation');
