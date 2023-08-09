<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\DishController;
use App\Http\Controllers\Api\CountryController;
use App\Http\Controllers\Api\UnitController;
use App\Http\Controllers\Api\MuscleGroupController;
use App\Http\Controllers\Api\AddictionController;
use App\Http\Controllers\Api\PhysicalActivityController;
use App\Http\Controllers\Api\BackupController;
use App\Http\Controllers\Api\DashboardController;

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);

Route::get('listCountries', [CountryController::class, 'listCountries']);
Route::get('listUnits', [UnitController::class, 'listUnits']);
Route::get('listMuscleGroups', [MuscleGroupController::class, 'listMuscleGroups']);

Route::group(['middleware' => ['auth:sanctum']], function(){
    //protected user routes
    Route::get('userProfile', [UserController::class, 'userProfile']);
    Route::get('listUsers', [UserController::class, 'listUsers']);
    Route::get("showUser/{userId}", [UserController::class, 'showUser']);
    Route::put('updateUser/{userId}', [UserController::class, 'updateUser']);
    Route::delete('deleteUser/{userId}', [UserController::class, 'deleteUser']);
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

    //protected physical activities routes
    Route::post("createActivity", [PhysicalActivityController::class, 'createActivity']);
    Route::get("listActivities", [PhysicalActivityController::class, 'listActivities']);
    Route::get("showActivity/{activityId}", [PhysicalActivityController::class, 'showActivity']);
    Route::put("updateActivity/{activityId}", [PhysicalActivityController::class, 'updateActivity']);
    Route::delete("deleteActivity/{activityId}", [PhysicalActivityController::class, 'deleteActivity']);

    //protected backup routes
    Route::post("createBackup", [BackupController::class, 'createBackup']);

    //protected dashboard routes
    Route::get("getDashboardStats", [DashboardController::class, 'getDashboardStats']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
