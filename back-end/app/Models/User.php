<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'Users.Users';

    protected $filllable = [
        'id',
        'FirstName',
        'LastName1',
        'LastName2',
        'BirthDate',
        'Photo',
        'RoleID',
        'DemographicInfoID',
        'ContactInfoID',
        'HealthInfoID',
        'PasswordID'
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
        return $this->hasMany(DailyImage::class, 'id', 'UserID');   
    }

    public function DishesPerDay(){
        return $this->hasMany(DishesPerDay::class, 'id', 'UserID');   
    }

    public function AddictionsPerDay(){
        return $this->hasMany(AddictionsPerDay::class, 'id', 'UserID');   
    }

    public function ActivitiesPerDay(){
        return $this->hasMany(ActivitiesPerDay::class, 'id', 'UserID');   
    }

    public function Follower(){
        return $this->hasMany(Follower::class, 'FollowerID', 'UserID');   
    }
    
    public function Followee(){
        return $this->hasMany(Follower::class, 'FolloweeID', 'UserID');   
    }

    public function Post(){
        return $this->hasMany(Post::class, 'id', 'UserID');   
    }

    public function Like(){
        return $this->hasMany(Like::class, 'id', 'UserID');   
    }

    public function Comment(){
        return $this->hasMany(Comment::class, 'id', 'UserID');   
    }

    public function Backup(){
        return $this->hasMany(Backup::class, 'id', 'UserID');   
    }
}
