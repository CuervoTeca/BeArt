<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Person;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class PersonController extends Controller
{
    public function register(Request $request){
        $request->validate([
            "FirstName" => "required|max:20",
            "LastName1" => "required|max:20",
            "LastName2" => "max:20",
            "BirthDate" => "required|date",
            //"Photo" => "image",
            "City" => "max:25",
            "CountryID" => "required|integer",
            "PhoneNumber" => "required|max:11",
            "EmailAddress" => "email|required|max:50",
            "FacebookName" => "max:50",
            "Instagram" => "max:20",
            "Twitter" => "max:20",
            "Weight" => "required|decimal:(max:3),2",
            "Height" => "required|decimal:(max:2),2",
            "Password" => "min:8|confirmed",
        ]);

        $FirstName = $request->FirstName;
        $LastName1 = $request->LastName1;
        $LastName2 = $request->LastName2;
        $BirthDate = $request->BirthDate;

        $City = $request->City;
        $CountryID = $request->CountryID;

        $PhoneNumber = $request->PhoneNumber;
        $EmailAddress = $request->EmailAddress;
        $FacebookName = $request->FacebookName;
        $Instagram = $request->Instagram;
        $Twitter = $request->Twitter;

        $Weight = $request->Weight;
        $Height = $request->Height;

        $PasswordHash = Hash::make($request->Password);

        $procedureName = "sp_insertPerson";

        DB::statement("EXEC $procedureName '$FirstName', '$LastName1', '$LastName2', '$BirthDate', '$City', $CountryID, '$PhoneNumber', '$EmailAddress', '$FacebookName', '$Instagram', '$Twitter', $Weight, $Height, '$PasswordHash'");

        return response()->json([
            "status" => 200,
            "message" => "Registration completed successfully"
        ], 200);
    }

    public function login(Request $request){

    }

    public function personProfile(){

    }

    public function logout(){

    }
}