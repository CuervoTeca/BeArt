<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\PhysicalActivity;

class PhysicalActivityController extends Controller
{
    public function createActivity(Request $request){
        $request->validate([
            "ActivityName" => "required|max:50",
            "CaloriesBurnedPerHour" => "required|integer",
            "MuscleGroupID" => "required|integer",
        ]);

        $activity = new Activity();
        $activity->ActivityName = $request->ActivityName;
        $activity->CaloriesBurnedPerHour = $request->CaloriesBurnedPerHour;
        $activity->MuscleGroupID = $request->MuscleGroupID;

        if (Auth::check()) {
            // User authenticated
            $userId = Auth::id();

            $activity->save();
    
            return response()->json([
                "status" => 200,
                "message" => "Activity created successfully"
            ], 200);
        }
    }

    public function listActivities(){
        if (Auth::check()) {
            // User authenticated
            $userId = Auth::id();

            $procedureName = "sp_listActivities";

            $data = DB::select("EXEC $procedureName");
    
            return response()->json([
                "status" => 200,
                "message" => "Activities list",
                "data" => $data
            ], 200);
        }
    }

    public function showActivity($activityId){
        if (Auth::check()) {
            // User authenticated
            $userId = Auth::id();
    
            if (PhysicalActivity::where("ActivityID", $activityId)->exists()) {
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

    public function updateActivity(Request $request, $activityId)
    {
        if (Auth::check()) {
            // User authenticated
            $userId = Auth::id();
    
            if (PhysicalActivity::where("ActivityID", $activityId)->exists()) {
                // If the activity exists, it can be updated
    
                $procedureShowName = "sp_showActivity";
                $activity = DB::select("EXEC $procedureShowName $activityId");
    
                if (count($activity) > 0) {
                    // Assign the first object in the array to $activity, as DB::select always returns an array, but ternary operator needs an object
                    $activity = $activity[0];

                    $originalActivity = PhysicalActivity::where('ActivityName', '=', $activity->ActivityName)->firstOrFail();
    
                    $ActivityName = isset($request->ActivityName) ? $request->ActivityName : $activity->ActivityName;
                    $CaloriesBurnedPerHour = isset($request->CaloriesBurnedPerHour) ? $request->CaloriesBurnedPerHour : $activity->CaloriesBurnedPerHour;
                    $MuscleGroupID = isset($request->MuscleGroupID) ? $request->MuscleGroupID : $activity->MuscleGroupID;
    
                    $procedureUpdateName = "sp_updateActivity";
    
                    DB::statement("EXEC $procedureUpdateName $activityId, '$ActivityName', $CaloriesBurnedPerHour, $MuscleGroupID");
    
                    return response()->json([
                        "status" => 200,
                        "message" => "Activity updated"
                    ], 200);
                } else {
                    return response()->json([
                        "status" => 404,
                        "message" => "Activity not found"
                    ], 404);
                }
            }
        }
    }

    public function deleteActivity($activityId){
        if (Auth::check()) {
            // User authenticated
            $userId = Auth::id();

            if ((PhysicalActivity::where(["ActivityID" => $activityId]))->exists()){
                // if exists, it can be deleted

                $activity = PhysicalActivity::where(["ActivityID" => $activityId])->first();

                $activity->delete();

                return response()->json([
                    "status" => 200,
                    "message" => "Activity deleted"
                ], 200);

            } else {
                return response()->json([
                    "status" => 404,
                    "message" => "Activity not found"
                ], 404);
            }
        }
    }
}
