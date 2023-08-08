<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Country;

class CountryController extends Controller
{
    public function listCountries(){
        $data = Country::all();

        return response()->json([
            "status" => 200,
            "message" => "Countries list",
            "data" => $data
        ], 200);
    }
}
