<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    protected $table = 'Person.Person';

    protected $filllable = [
        'PersonID',
        'FirstName',
        'LastName1',
        'LastName2',
        'BirthDate',
        'Photo',
        'CreationDate',
        'RoleID',
        'DemographicInfoID',
        'ContactInfoID',
        'PersonalInfoID',
        'PasswordID',
    ];

    public function Role(){
        return $this->belongsTo(Role::class, 'RoleID', 'RoleID');
    }

    public function DemographicInfo(){
        return $this->hasOne(DemographicInfo::class);
    }

    public function ContactInfo(){
        return $this->hasOne(ContactInfo::class);
    }

    public function HealthInfo(){
        return $this->hasOne(HealthInfo::class);
    }

    public function Password(){
        return $this->hasOne(Password::class);
    }
}
