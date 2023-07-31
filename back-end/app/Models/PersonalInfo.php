<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalInfo extends Model
{
    use HasFactory;

    protected $table = 'Person.PersonalInfo';

    protected $filllable = [
        'PersonalInfoID',
        'Weight',
        'Height'
    ];

    public $timestamps = false;
}
