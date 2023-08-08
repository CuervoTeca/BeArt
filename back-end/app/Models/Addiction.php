<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Addiction extends Model
{
    protected $table = 'Health.Addiction';

    protected $primaryKey = 'AddictionID';

    protected $filllable = [
        'AddictionName',
        'UnitID'
    ];

    public function Unit(){
        return $this->belongsTo(Unit::class, 'UnitID', 'UnitID');
    }

    public function AddictionsPerDay(){
        return $this->hasMany(AddictionsPerDay::class, 'AddictionID', 'AddictionID');   
    }

    public $timestamps = false;
}
