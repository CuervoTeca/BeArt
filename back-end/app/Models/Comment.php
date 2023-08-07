<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $table = 'Social.Comment';

    protected $filllable = [
        'Content',
        'Date',
        'PostID',
        'UserID'
    ];

    public function Post(){
        return $this->hasOne(Post::class);
    }

    public function User(){
        return $this->hasOne(User::class);
    }

    public $timestamps = false;
}
