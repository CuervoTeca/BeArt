<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use App\Models\ContactInfo;
use App\Models\Password;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

use Illuminate\Database\Eloquent\ModelNotFoundException;

class UserController extends Controller
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
            "EmailAddress" => "email|required|max:50|unique:sqlsrv.Users.ContactInfo",
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

        $procedureName = "sp_insertUser";

        DB::statement("EXEC $procedureName '$FirstName', '$LastName1', '$LastName2', '$BirthDate', '$City', $CountryID, '$PhoneNumber', '$EmailAddress', '$FacebookName', '$Instagram', '$Twitter', $Weight, $Height, '$PasswordHash'");

        return response()->json([
            "status" => 200,
            "message" => "User registered successfully"
        ], 200);
    }

    public function login(Request $request){
        $request->validate([
            'EmailAddress' => 'required|email|max:50',
            'Password' => 'required'
        ]);

        try {
            $contactInfo = ContactInfo::where('EmailAddress', '=', $request->EmailAddress)->firstOrFail();
            $contactInfoId = $contactInfo->ContactInfoID;
    
            $user = User::where('ContactInfoID', '=', $contactInfoId)->firstOrFail();
    
            $passwordId = $user->PasswordID;
            $password = Password::where('PasswordID', '=', $passwordId)->first();
    
            if (Hash::check($request->Password, $password->PasswordHash)) {
                //Create token
                $token = $user->createToken('auth_token')->plainTextToken;
    
                //Everything OK
                return response()->json([
                    "status" => 200,
                    "message" => "User logged in",
                    "accessToken" => $token
                ], 200);
            } else {
                //Wrong password
                return response()->json([
                    "status" => 401,
                    "message" => "Incorrect password"
                ], 401);
            }
        } catch (ModelNotFoundException $e) {
            //User not found
            return response()->json([
                "status" => 404,
                "message" => "User not found"
            ], 404);
        }
    }

    public function userProfile(){
        if (Auth::check()) {
            // User authenticated
            $userId = Auth::id();

            $procedureName = "sp_getUserProfile";

            $data = DB::select("EXEC $procedureName $userId");
            // Assign the first object in the array to $dish, as DB::select always returns an array
            $data = $data[0];
    
            return response()->json([
                "status" => 200,
                "message" => "User profile info",
                "data" => $data
            ], 200);
        }
    }

    public function logout(){
        auth()->user()->tokens()->delete();

        return response()->json([
            "status" => 200,
            "message" => "User logged out"
        ], 200);
    }
}
