<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;



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
use App\Http\Controllers\ProductController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthenticatedSessionController::class, 'store'])
->middleware(['web', 'guest'])
->name('login');

Route::get('/get-csrf-token', function () {
    return response()->json(['token' => csrf_token()]);
});

Route::post('/register', [RegisteredUserController::class, 'store'])
->middleware('guest')
->name('register');

Route::get('/user', [AuthenticatedSessionController::class, 'user'])
->middleware('auth');

Route::get('/product/{id}', [ProductController::class, 'handleCountDownTimer']);

Route::get('/products', [ProductController::class, 'index'])
->middleware('auth');


Route::get('/categories',[CategoryController::class, 'getAllCategory']);
Route::get('/categories/{id}',[CategoryController::class, 'getCategory']);
Route::post('/categories', [CategoryController::class, 'createCategory'] );
Route::put('/categories/{id}', [CategoryController::class, 'updateCategory']);
Route::delete('/categories/{id}', [CategoryController::class, 'deleteCategory']);


Route::get('/products',[ProductController::class, 'getAllProduct']);
Route::get('/products/{id}',[ProductController::class, 'getProduct']);
Route::post('/products', [ProductController::class, 'createProduct'] );
Route::put('/products/{id}', [ProductController::class, 'updateProduct']);
Route::delete('/products/{id}', [ProductController::class, 'deleteProduct']);
// Get user data
Route::get('/getUserData', [UserController::class,'getUserData']);


                // login + register
// Route::post('register', [UserController::class, 'registerAPI']);
// Route::post('login', [UserController::class, 'loginAPI']);
// Route::get('getuser/{id}', [UserController::class, 'getUser']);


//profile + update
Route::get('users/{id}', [UserController::class, 'getUser']);
Route::post('update/{id}', [UserController::class, 'updateProfile']);
//all users
Route::get('users', [UserController::class, 'getAllUsers']);

Route::delete('delete/{id}', [UserController::class, 'deleteUser']);

// sara
