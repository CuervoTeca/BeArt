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
        return $this->belongsTo(User::class, 'FollowerID', 'id');
    }

    public function Followee(){
        return $this->belongsTo(User::class, 'FolloweeID', 'id');
    }

    public $timestamps = false;
}
