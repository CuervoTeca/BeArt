<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dish extends Model
{
    protected $table = 'Health.Dish';

    protected $filllable = [
        'DishID',
        'DishName',
        'NutritionFactsID'
    ];

    public function NutritionFactsPer100G(){
        return $this->hasOne(ProNutritionFactsPer100Gfile::class);
    }

    public $timestamps = false;
}
