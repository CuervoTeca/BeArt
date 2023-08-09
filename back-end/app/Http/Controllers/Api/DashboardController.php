<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function getDashboardStats(){
        if (Auth::check()) {
            // User authenticated
            $userId = Auth::id();
    
                $procedureShowName = "sp_getDashboardStats";
                $dashboard = DB::select("EXEC $procedureShowName");
    
                if (count($dashboard) > 0) {
                    // Assign the first object in the array to $dashboard, as DB::select always returns an array
                    $dashboard = $dashboard[0];
    
                    return response()->json([
                        "status" => 200,
                        "message" => "Dashboard data",
                        "data" => $dashboard
                    ], 200);
                } else {
                    return response()->json([
                        "status" => 404,
                        "message" => "Problem fetching dashboard data"
                    ], 404);
                }
        }
    }
}
