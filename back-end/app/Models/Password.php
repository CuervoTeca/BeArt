<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Password extends Model
{
    use HasFactory;

    protected $table = 'Users.Password';

    protected $filllable = [
        'PasswordID',
        'PasswordHash'
    ];

    public function User(){
        return $this->belongsTo(User::class);
    }

    public $timestamps = false;
}
