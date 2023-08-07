<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\DishController;
use App\Http\Controllers\Api\CountryController;
use App\Http\Controllers\Api\UnitController;
use App\Http\Controllers\Api\MuscleGroupController;
use App\Http\Controllers\Api\AddictionController;

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);

Route::get('listCountries', [CountryController::class, 'listCountries']);

Route::get('listUnits', [UnitController::class, 'listUnits']);

Route::get('listMuscleGroups', [MuscleGroupController::class, 'listMuscleGroups']);

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

    //protected addictions routes
    Route::post("createAddiction", [AddictionController::class, 'createAddiction']);
    Route::get("listAddictions", [AddictionController::class, 'listAddictions']);
    Route::get("showAddiction/{addictionId}", [AddictionController::class, 'showAddiction']);
    Route::put("updateAddiction/{addictionId}", [AddictionController::class, 'updateAddiction']);
    Route::delete("deleteAddiction/{addictionId}", [AddictionController::class, 'deleteAddiction']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
