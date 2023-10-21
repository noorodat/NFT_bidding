<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;


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
                ->middleware('auth')
                ;
          
      Route::get('/Biddings',[BiddingController::class, 'getAllBidding']);
      Route::get('/Biddings/{id}',[BiddingController::class, 'getBidding']);
      Route::post('/Biddings', [BiddingController::class, 'createBidding'] );
      Route::put('/Biddings/{id}', [BiddingController::class, 'updateBidding']);
      Route::delete('/Biddings/{id}', [BiddingController::class, 'deleteBidding']);


      Route::get('/Comments',[CommentController::class, 'getAllComment']);
      Route::get('/Comments/{id}',[CommentController::class, 'getComment']);
      Route::post('/Comments', [CommentController::class, 'createComment'] );
      Route::put('/Comments/{id}', [CommentController::class, 'updateComment']);
      Route::delete('/Comments/{id}', [CommentController::class, 'deleteComment']);



      Route::get('/Posts',[PostController::class, 'getAllPost']);
      Route::get('/Posts/{id}',[PostController::class, 'getPost']);
      Route::post('/Posts', [PostController::class, 'createPost'] );
      Route::put('/Posts/{id}', [PostController::class, 'updatePost']);
      Route::delete('/Posts/{id}', [PostController::class, 'deletePost']);