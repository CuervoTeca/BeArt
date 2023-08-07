<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Unit;

class UnitController extends Controller
{
    public function listUnits(){
        $data = Unit::all();

        return response()->json([
            "status" => 200,
            "message" => "Units list",
            "data" => $data
        ], 200);
    }
}
