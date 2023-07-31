<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    use HasFactory;

    protected $table = 'Health.Unit';

    protected $filllable = [
        'UnitID',
        'UnitName'
    ];

    public function Addiction()
    {
        return $this->hasMany(Addiction::class, 'UnitID', 'UnitID');
    }

    public $timestamps = false;
}
