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
        Schema::create('Health.ActivitiesPerDay', function (Blueprint $table) {
            $table->time('Duration');
            $table->decimal('TotalCaloriesBurned', 7, 2);
            $table->dateTime('Date');
            $table->bigInteger('PersonID');
            $table->bigInteger('ActivityID');

            $table->foreign('PersonID')->references('PersonID')->on('Person.Person');
            $table->foreign('ActivityID')->references('ActivityID')->on('Health.PhysicalActivity');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Health.ActivitiesPerDay');
    }
};
