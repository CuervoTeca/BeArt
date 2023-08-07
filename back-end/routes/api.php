<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\DishController;

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function(){
    //protected auth routes
    Route::get('userProfile', [UserController::class, 'userProfile']);
    Route::get('logout', [UserController::class, 'logout']);

    //protected dishes routes
    Route::post("createDish", [DishController::class, 'createDish']);
    Route::get("listDishes", [DishController::class, 'listDishes']);
    Route::get("showDish/{dishId}", [DishController::class, 'showDish']);
    Route::put("updateDish/{dishId}", [DishController::class, 'updateDish']);
    Route::delete("deleteDish/{dishId}", [DishController::class, 'deleteDish']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
