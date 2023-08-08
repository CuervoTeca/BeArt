<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    protected $table = 'Demographics.Country';

    protected $filllable = [
        'CountryName'
    ];

    public function DemographicInfo()
    {
        return $this->hasMany(DemographicInfo::class, 'CountryID', 'CountryID');
    }

    public $timestamps = false;
}
