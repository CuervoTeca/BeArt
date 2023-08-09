<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class BackupController extends Controller
{
    public function createBackup(Request $request){
        $request->validate([
            "Name" => "required|max:150"
        ]);

        $Name = $request->Name;

        if (Auth::check()) {
            // User authenticated
            $userId = Auth::id();

            $procedureName = "sp_insertBackup";

            DB::unprepared("EXEC $procedureName $userId, '$Name'");
    
            return response()->json([
                "status" => 200,
                "message" => "Backup created successfully"
            ], 200);
        }
    }

    
}
