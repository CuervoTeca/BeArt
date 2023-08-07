<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Dish;

class DishController extends Controller
{
    public function createDish(Request $request){
        $request->validate([
            "DishName" => "required|max:50",
            "Calories" => "required|integer",
            "Fats" => "required|integer",
            "Collesterol" => "required|integer",
            "Sodium" => "required|integer",
            "Fiber" => "required|integer",
            "Carbs" => "required|integer",
            "Protein" => "required|integer",
        ]);

        $DishName = $request->DishName;

        $Calories = $request->Calories;
        $Fats = $request->Fats;
        $Collesterol = $request->Collesterol;
        $Sodium = $request->Sodium;
        $Fiber = $request->Fiber;
        $Carbs = $request->Carbs;
        $Protein = $request->Protein;

        if (Auth::check()) {
            // User authenticated
            $userId = Auth::id();

            $procedureName = "sp_insertDish";

            DB::statement("EXEC $procedureName '$DishName', $Calories, $Fats, $Collesterol, $Sodium, $Fiber, $Carbs, $Protein");
    
            return response()->json([
                "status" => 200,
                "message" => "Dish created successfully"
            ], 200);
        }
    }

    public function listDishes(){
        if (Auth::check()) {
            // User authenticated
            $userId = Auth::id();

            $procedureName = "sp_listDishes";

            $data = DB::select("EXEC $procedureName");
    
            return response()->json([
                "status" => 200,
                "message" => "Dishes list",
                "data" => $data
            ], 200);
        }
    }

    public function showDish($dishId){
        
    }

    public function updateDish(Request $request, $dishId){
        if (Auth::check()) {
            // User authenticated
            $userId = Auth::id();

            if ((Dish::where(["DishID" => $dishId]))->exists()){
                // if exists, it can be updated

                $procedureShowName = "sp_showDish";

                $dish = DB::select("EXEC $procedureShowName $dishId");

                $DishName = isset($request->DishName) ? $request->DishName : $dish->DishName;

                $Calories = isset($request->Calories) ? $request->Calories : $dish->Calories;
                $Fats = isset($request->Fats) ? $request->Fats : $dish->Fats;
                $Collesterol = isset($request->Collesterol) ? $request->Collesterol : $dish->Collesterol;
                $Sodium = isset($request->Sodium) ? $request->Sodium : $dish->Sodium;
                $Fiber = isset($request->Fiber) ? $request->Fiber : $dish->Fiber;
                $Carbs = isset($request->Carbs) ? $request->Carbs : $dish->Carbs;
                $Protein = isset($request->Protein) ? $request->Protein : $dish->Protein;

                $procedureUpdateName = "sp_updateDish";

                DB::statement("EXEC $procedureUpdateName $dishId, '$DishName', $Calories, $Fats, $Collesterol, $Sodium, $Fiber, $Carbs, $Protein");

                return response()->json([
                    "status" => 200,
                    "message" => "Dish updated"
                ], 200);

            } else {
                return response()->json([
                    "status" => 404,
                    "message" => "Dish not found"
                ], 404);
            }
        }
    }

    public function deleteDish($dishId){
        if (Auth::check()) {
            // User authenticated
            $userId = Auth::id();

            if ((Dish::where(["DishID" => $dishId]))->exists()){
                // if exists, it can be updated

                $procedureName = "sp_deleteDish";

                DB::statement("EXEC $procedureName $dishId");

                return response()->json([
                    "status" => 200,
                    "message" => "Dish deleted"
                ], 200);

            } else {
                return response()->json([
                    "status" => 404,
                    "message" => "Dish not found"
                ], 404);
            }
        }
    }
}
