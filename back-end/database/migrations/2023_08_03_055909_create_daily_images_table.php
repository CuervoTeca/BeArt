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
        Schema::create('Person.DailyImage', function (Blueprint $table) {
            $table->id('ImageID');
            $table->binary('Image')->nullable();
            $table->dateTime('Date'); 
            $table->string('Prompt', 250);
            $table->bigInteger('PersonID');

            $table->foreign('PersonID')->references('PersonID')->on('Person.Person');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Person.DailyImage');
    }
};
