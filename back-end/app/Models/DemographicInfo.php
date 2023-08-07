<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DemographicInfo extends Model
{
    protected $table = 'Users.DemographicInfo';

    protected $filllable = [
        'DemographicInfoID',
        'City',
        'CountryID'
    ];

    public function Country(){
        return $this->belongsTo(Country::class, 'CountryID', 'CountryID');
    }

    public function User(){
        return $this->belongsTo(User::class);
    }

    public $timestamps = false;
}
