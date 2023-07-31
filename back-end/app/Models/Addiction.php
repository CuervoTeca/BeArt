<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Addiction extends Model
{
    protected $table = 'Health.Addiction';

    protected $filllable = [
        'AddictionID',
        'AddictionName',
        'UnitID'
    ];

    public function Unit(){
        return $this->belongsTo(Unit::class, 'UnitID', 'UnitID');
    }

    public $timestamps = false;
}
