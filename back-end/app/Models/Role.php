<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $table = 'Role';

    protected $filllable = [
        'RoleID',
        'RoleName',
        'Description'
    ];

    public function User()
    {
        return $this->hasMany(User::class, 'RoleID', 'RoleID');
    }

    public $timestamps = false;
}
