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
            $table->decimal('Calories', 7, 2);
            $table->decimal('Fats', 7, 2);
            $table->decimal('Collesterol', 7, 2);
            $table->decimal('Sodium', 7, 2);
            $table->decimal('Fiber', 7, 2);
            $table->decimal('Carbs', 7, 2);
            $table->decimal('Protein', 7, 2);
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
