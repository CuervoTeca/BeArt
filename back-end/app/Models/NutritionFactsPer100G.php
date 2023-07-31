<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NutritionFactsPer100G extends Model
{
    use HasFactory;

    protected $table = 'Health.NutritionFactsPer100G';

    protected $filllable = [
        'NutritionFactsID',
        'Calories',
        'Fats',
        'Collesterol',
        'Sodium',
        'Fiber',
        'Carbs',
        'Protein'
    ];

    public function Dish(){
        return $this->belongsTo(Dish::class);
    }

    public $timestamps = false;
}
