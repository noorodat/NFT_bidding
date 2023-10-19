<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BiddingController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
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

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});


Route::get('/dashboard_welcome', function () {
    return view('welcome-dashboard');
})->name('dashboard.dashboard_login');

Route::resource('dashboard/users', UserController::class);
Route::resource('dashboard/admins', AdminController::class);
Route::resource('dashboard/categories', CategoryController::class);
Route::resource('dashboard/products', ProductController::class);
Route::resource('dashboard/posts', PostController::class);
Route::resource('dashboard/comments', CommentController::class);
Route::resource('dashboard/biddings', BiddingController::class);
Route::resource('dashboard/emails', ContactController::class);

require __DIR__.'/auth.php';
