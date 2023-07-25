<?php
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Ruta para registrar un nuevo usuario
Route::post('/register', 'App\Http\Controllers\AuthController@register');

// Ruta para iniciar sesión
Route::post('/login', 'App\Http\Controllers\AuthController@login');

// Ruta para cerrar sesión
Route::post('/logout', 'App\Http\Controllers\AuthController@logout')->middleware('auth:api');

// Ruta para probar la conexión a la base de datos
Route::get('/test-database-connection', 'App\Http\Controllers\AuthController@testDatabaseConnection');
