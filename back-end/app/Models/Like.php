<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;

    protected $table = 'Social.Like';

    protected $filllable = [
        'Date',
        'PostID',
        'PersonID',
    ];

    public function Post(){
        return $this->hasOne(Post::class);
    }

    public function Person(){
        return $this->hasOne(Person::class);
    }

    public $timestamps = false;
}
