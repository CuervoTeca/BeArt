<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MuscleGroup;

class MuscleGroupController extends Controller
{
    public function listMuscleGroups(){
        $data = MuscleGroup::all();

        return response()->json([
            "status" => 200,
            "message" => "Muscle groups list",
            "data" => $data
        ], 200);
    }
}
