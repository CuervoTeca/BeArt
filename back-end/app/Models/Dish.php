<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dish extends Model
{
    protected $table = 'Health.Dish';

    protected $filllable = [
        'DishName',
        'NutritionFactsID'
    ];

    public function NutritionFactsPer100G(){
        return $this->hasOne(ProNutritionFactsPer100Gfile::class);
    }

    public function DishesPerDay(){
        return $this->hasMany(DishesPerDay::class, 'DishID', 'DishID');   
    }

    public $timestamps = false;
}
