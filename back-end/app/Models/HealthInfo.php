<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HealthInfo extends Model
{
    use HasFactory;

    protected $table = 'Person.HealthInfo';

    protected $filllable = [
        'HealthInfoID',
        'Weight',
        'Height'
    ];

    public function Person(){
        return $this->belongsTo(Person::class);
    }
}
