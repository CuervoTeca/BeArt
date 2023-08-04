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

    public function DailyImage(){
        return $this->hasMany(DailyImage::class, 'PersonID', 'PersonID');   
    }

    public function DishesPerDay(){
        return $this->hasMany(DishesPerDay::class, 'PersonID', 'PersonID');   
    }

    public function AddictionsPerDay(){
        return $this->hasMany(AddictionsPerDay::class, 'PersonID', 'PersonID');   
    }

    public function ActivitiesPerDay(){
        return $this->hasMany(ActivitiesPerDay::class, 'PersonID', 'PersonID');   
    }

    public function Follower(){
        return $this->hasMany(Follower::class, 'FollowerID', 'PersonID');   
    }
    
    public function Followee(){
        return $this->hasMany(Follower::class, 'FolloweeID', 'PersonID');   
    }

    public function Post(){
        return $this->hasMany(Post::class, 'PersonID', 'PersonID');   
    }

    public function Like(){
        return $this->hasMany(Like::class, 'PersonID', 'PersonID');   
    }

    public function Comment(){
        return $this->hasMany(Comment::class, 'PersonID', 'PersonID');   
    }

    public function Backup(){
        return $this->hasMany(Backup::class, 'PersonID', 'PersonID');   
    }
}
