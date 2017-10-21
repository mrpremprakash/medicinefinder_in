<?php

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

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/administrator', function () {
//     return view('admin.index');
// });

// Route::any('{all?}', function() {
//     return view('index');
// })->where('all', '.+');

Route::get('/', 'BusinessController@show');
Route::get('/intro', 'BusinessController@show');
Route::get('/portfolio', 'BusinessController@show');
Route::get('/features', 'BusinessController@show');
Route::get('/faq', 'BusinessController@show');
Route::get('/add_new', 'BusinessController@show');
Route::post('/upload_profile', 'BusinessController@uploadProfile');
// Route::post('/', 'BusinessController@save');
Route::get('/store/{slug}', 'BusinessController@showBusinessDetail');
