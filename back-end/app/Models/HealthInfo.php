<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HealthInfo extends Model
{
    use HasFactory;

    protected $table = 'Users.HealthInfo';

    protected $filllable = [
        'HealthInfoID',
        'Weight',
        'Height'
    ];

    public function User(){
        return $this->belongsTo(User::class);
    }
}
