<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DailyImage extends Model
{
    use HasFactory;

    protected $table = 'Users.DailyImage';

    protected $filllable = [
        'Image',
        'Date',
        'Prompt',
        'UserID'
    ];

    public function User(){
        return $this->hasOne(User::class);
    }

    public function Post(){
        return $this->belongsTo(Post::class);
    }

    public $timestamps = false;
}
