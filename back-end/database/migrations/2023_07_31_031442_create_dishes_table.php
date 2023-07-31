<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('Health.Dish', function (Blueprint $table) {
            $table->id('DishID');
            $table->string('DishName', 50);
            $table->bigInteger('NutritionFactsID');

            $table->foreign('NutritionFactsID')->references('NutritionFactsID')->on('Health.NutritionFactsPer100G');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Health.Dish');
    }
};
