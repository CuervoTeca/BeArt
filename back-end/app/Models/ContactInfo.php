<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactInfo extends Model
{
    use HasFactory;

    protected $table = 'Users.ContactInfo';

    protected $filllable = [
        'PhoneNumber',
        'EmailAddress',
        'FacebookName',
        'Instagram',
        'Twitter'
    ];

    public function User(){
        return $this->belongsTo(User::class);
    }

    public $timestamps = false;
}
