<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhysicalActivity extends Model
{
    protected $table = 'Health.PhysicalActivity';

    protected $primaryKey = 'ActivityID';

    protected $filllable = [
        'ActivityName',
        'CaloriesBurnedPerHour',
        'MuscleGroupID'
    ];

    public function MuscleGroupID(){
        return $this->belongsTo(MuscleGroupID::class, 'MuscleGroupID', 'MuscleGroupID');
    }

    public function AddictionsPerDay(){
        return $this->hasMany(AddictionsPerDay::class, 'ActivityID', 'ActivityID');   
    }

    public $timestamps = false;
}
