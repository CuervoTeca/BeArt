<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Follower extends Model
{
    use HasFactory;

    protected $table = 'Social.Follower';

    protected $filllable = [
        'FollowDate',
        'FollowerID',
        'FolloweeID'
    ];

    public function Follower(){
        return $this->belongsTo(Person::class, 'FollowerID', 'PersonID');
    }

    public function Followee(){
        return $this->belongsTo(Person::class, 'FolloweeID', 'PersonID');
    }

    public $timestamps = false;
}
