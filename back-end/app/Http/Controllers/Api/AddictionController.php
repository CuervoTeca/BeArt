<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Addiction;

class AddictionController extends Controller
{
    public function createAddiction(Request $request){
        $request->validate([
            "AddictionName" => "required|max:50",
            "UnitID" => "required|integer"
        ]);

        $addiction = new Addiction();
        $addiction->AddictionName = $request->AddictionName;
        $addiction->UnitID = $request->UnitID;

        if (Auth::check()) {
            // User authenticated
            $userId = Auth::id();

            $addiction->save();
    
            return response()->json([
                "status" => 200,
                "message" => "Addiction created successfully"
            ], 200);
        }
    }

    public function listAddictions(){
        if (Auth::check()) {
            // User authenticated
            $userId = Auth::id();

            $procedureName = "sp_listAddictions";

            $data = DB::select("EXEC $procedureName");
    
            return response()->json([
                "status" => 200,
                "message" => "Addictions list",
                "data" => $data
            ], 200);
        }
    }

    public function showAddiction($addictionId){
        if (Auth::check()) {
            // User authenticated
            $userId = Auth::id();
    
            if (Addiction::where("AddictionID", $addictionId)->exists()) {
                // If the Addiction exists, it can be shown
    
                $procedureShowName = "sp_showAddiction";
                $addiction = DB::select("EXEC $procedureShowName $addictionId");
    
                if (count($addiction) > 0) {
                    // Assign the first object in the array to $addiction, as DB::select always returns an array
                    $addiction = $addiction[0];
    
                    return response()->json([
                        "status" => 200,
                        "message" => "Addiction data",
                        "data" => $addiction
                    ], 200);
                } else {
                    return response()->json([
                        "status" => 404,
                        "message" => "Addiction not found"
                    ], 404);
                }
            }
        }
    }

    public function updateAddiction(Request $request, $addictionId)
    {
        if (Auth::check()) {
            // User authenticated
            $userId = Auth::id();
    
            if (Addiction::where("AddictionID", $addictionId)->exists()) {
                // If the addiction exists, it can be updated
    
                $procedureShowName = "sp_showAddiction";
                $addiction = DB::select("EXEC $procedureShowName $addictionId");
    
                if (count($addiction) > 0) {
                    // Assign the first object in the array to $addiction, as DB::select always returns an array, but ternary operator needs an object
                    $addiction = $addiction[0];

                    $originalAddiction = Addiction::where('AddictionName', '=', $addiction->AddictionName)->firstOrFail();
    
                    $AddictionName = isset($request->AddictionName) ? $request->AddictionName : $addiction->AddictionName;
                    $UnitID = isset($request->UnitID) ? $request->UnitID : $originalAddiction->UnitID;
    
                    $procedureUpdateName = "sp_updateAddiction";
    
                    DB::statement("EXEC $procedureUpdateName $addictionId, '$AddictionName', $UnitID");
    
                    return response()->json([
                        "status" => 200,
                        "message" => "Addiction updated"
                    ], 200);
                } else {
                    return response()->json([
                        "status" => 404,
                        "message" => "Addiction not found"
                    ], 404);
                }
            }
        }
    }
    
    

    public function deleteAddiction($addictionId){
        if (Auth::check()) {
            // User authenticated
            $userId = Auth::id();

            if ((Addiction::where(["AddictionID" => $addictionId]))->exists()){
                // if exists, it can be updated

                $addiction = Addiction::where(["AddictionID" => $addictionId])->first();

                $addiction->delete();

                return response()->json([
                    "status" => 200,
                    "message" => "Addiction deleted"
                ], 200);

            } else {
                return response()->json([
                    "status" => 404,
                    "message" => "Addiction not found"
                ], 404);
            }
        }
    }
}
