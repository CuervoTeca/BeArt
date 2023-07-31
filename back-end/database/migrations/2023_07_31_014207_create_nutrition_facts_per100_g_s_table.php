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
        Schema::create('Health.NutritionFactsPer100G', function (Blueprint $table) {
            $table->id('NutritionFactsID');
            $table->integer('Calories');
            $table->integer('Fats');
            $table->integer('Collesterol');
            $table->integer('Sodium');
            $table->integer('Fiber');
            $table->integer('Carbs');
            $table->integer('Protein');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Health.NutritionFactsPer100G');
    }
};
