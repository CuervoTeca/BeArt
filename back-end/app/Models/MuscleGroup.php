<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MuscleGroup extends Model
{
    use HasFactory;

    protected $table = 'Health.MuscleGroup';

    protected $filllable = [
        'MuscleGroupName'
    ];

    public function PhysicalActivity()
    {
        return $this->hasMany(PhysicalActivity::class, 'MuscleGroupID', 'MuscleGroupID');
    }

    public $timestamps = false;
}
