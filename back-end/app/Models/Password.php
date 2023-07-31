<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Password extends Model
{
    use HasFactory;

    protected $table = 'Person.Password';

    protected $filllable = [
        'PasswordID',
        'PasswordHash'
    ];

    public function Person(){
        return $this->belongsTo(Person::class);
    }

    public $timestamps = false;
}
