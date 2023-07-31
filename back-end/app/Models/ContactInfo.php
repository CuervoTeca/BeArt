<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactInfo extends Model
{
    use HasFactory;

    protected $table = 'Person.ContactInfo';

    protected $filllable = [
        'ContactInfoID',
        'PhoneNumber',
        'EmailAddress',
        'FacebookName',
        'Instagram',
        'Twitter'
    ];

    public function Person(){
        return $this->belongsTo(Person::class);
    }

    public $timestamps = false;
}
