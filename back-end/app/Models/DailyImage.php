<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DailyImage extends Model
{
    use HasFactory;

    protected $table = 'Person.DailyImage';

    protected $filllable = [
        'ImageID',
        'Image',
        'Date',
        'Prompt',
        'PersonID'
    ];

    public function Person(){
        return $this->hasOne(Person::class);
    }

    public function Post(){
        return $this->belongsTo(Post::class);
    }

    public $timestamps = false;
}
