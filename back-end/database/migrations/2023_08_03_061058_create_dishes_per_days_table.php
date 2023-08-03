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
        Schema::create('Health.DishesPerDay', function (Blueprint $table) {
            $table->integer('Quantity');
            $table->decimal('TotalCalories', 18, 2);
            $table->decimal('TotalFats', 18, 2);
            $table->decimal('TotalCollesterol', 18, 2);
            $table->decimal('TotalSodium', 18, 2);
            $table->decimal('TotalFiber', 18, 2);
            $table->decimal('TotalCarbs', 18, 2);
            $table->decimal('TotalProteins', 18, 2);
            $table->dateTime('Date');
            $table->bigInteger('PersonID');
            $table->bigInteger('DishID');

            $table->foreign('PersonID')->references('PersonID')->on('Person.Person');
            $table->foreign('DishID')->references('DishID')->on('Health.Dish');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Health.DishesPerDay');
    }
};
