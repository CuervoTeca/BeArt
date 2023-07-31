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
        Schema::create('Health.PhysicalActivity', function (Blueprint $table) {
            $table->id('ActivityID');
            $table->string('ActivityName', 50);
            $table->integer('CaloriesBurnedPerHour');
            $table->bigInteger('MuscleGroupID');

            $table->foreign('MuscleGroupID')->references('MuscleGroupID')->on('Health.MuscleGroup');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Health.PhysicalActivity');
    }
};
