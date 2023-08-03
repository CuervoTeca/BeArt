<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $table = 'Social.Post';

    protected $filllable = [
        'PostID',
        'Content',
        'Date',
        'PersonID',
        'ImageID'
    ];

    public function Person(){
        return $this->hasOne(Person::class);
    }

    public function DailyImage(){
        return $this->hasOne(DailyImage::class);
    }

    public function Like(){
        return $this->hasMany(Like::class, 'PostID', 'PostID');   
    }

    public function Comment(){
        return $this->hasMany(Comment::class, 'PostID', 'PostID');   
    }

    public $timestamps = false;
}
