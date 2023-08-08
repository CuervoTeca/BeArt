<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AddictionsPerDay extends Model
{
    use HasFactory;

    protected $table = 'Health.AddictionsPerDay';

    protected $filllable = [
        'Quantity',
        'Date',
        'UserID',
        'AddictionID'
    ];

    public function User(){
        return $this->hasOne(User::class);
    }

    public function Addiction(){
        return $this->hasOne(Addiction::class);
    }

    public $timestamps = false;
}
