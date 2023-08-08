<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Backup extends Model
{
    use HasFactory;

    protected $table = 'Backup';

    protected $filllable = [
        'Date',
        'UserID'
    ];

    public function User(){
        return $this->hasOne(User::class);
    }

    public $timestamps = false;
}
