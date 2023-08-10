<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Backup;

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

    public function listBackups(){
        if (Auth::check()) {
            // User authenticated
            $userId = Auth::id();

            $procedureName = "sp_listBackups";

            $data = DB::select("EXEC $procedureName");
    
            return response()->json([
                "status" => 200,
                "message" => "Backups list",
                "data" => $data
            ], 200);
        }
    }

    public function deleteBackup($backupId){
        if (Auth::check()) {
            // User authenticated
            $userId = Auth::id();

            if ((Backup::where(["BackupID" => $backupId]))->exists()){
                // if exists, it can be deleted

                $procedureName = "sp_deleteBackup";

                DB::statement("EXEC $procedureName $backupId");

                return response()->json([
                    "status" => 200,
                    "message" => "Backup deleted"
                ], 200);

            } else {
                return response()->json([
                    "status" => 404,
                    "message" => "Backup not found"
                ], 404);
            }
        }
    }
    
}
