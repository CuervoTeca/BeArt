<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Backup extends Model
{
    use HasFactory;

    protected $table = 'Backup';

    protected $filllable = [
        'BackupID',
        'Date',
        'PersonID'
    ];

    public function Person(){
        return $this->hasOne(Person::class);
    }

    public $timestamps = false;
}
