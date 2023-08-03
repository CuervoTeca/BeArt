<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DishesPerDay extends Model
{
    use HasFactory;

    protected $table = 'Health.DishesPerDay';

    protected $filllable = [
        'Quantity',
        'TotalCalories',
        'TotalFats',
        'TotalCollesterol',
        'TotalSodium',
        'TotalFiber',
        'TotalCarbs',
        'TotalProteins',
        'Date',
        'PersonID',
        'DishID'
    ];

    public function Person(){
        return $this->hasOne(Person::class);
    }

    public function Dish(){
        return $this->hasOne(Dish::class);
    }

    public $timestamps = false;
}
