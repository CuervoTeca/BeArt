<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivitiesPerDay extends Model
{
    use HasFactory;

    protected $table = 'Health.ActivitiesPerDay';

    protected $filllable = [
        'Duration',
        'TotalCaloriesBurned',
        'Date',
        'UserID',
        'ActivityID'
    ];

    public function User(){
        return $this->hasOne(User::class);
    }

    public function PhysicalActivity(){
        return $this->hasOne(PhysicalActivity::class);
    }

    public $timestamps = false;
}
