<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DemographicInfo extends Model
{
    protected $table = 'Person.DemographicInfo';

    protected $filllable = [
        'DemographicInfoID',
        'City',
        'CountryID'
    ];

    public function Country(){
        return $this->belongsTo(Country::class, 'CountryID', 'CountryID');
    }

    public function Person(){
        return $this->belongsTo(Person::class);
    }

    public $timestamps = false;
}
