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
        Schema::create('Health.AddictionsPerDay', function (Blueprint $table) {
            $table->integer('Quantity');
            $table->dateTime('Date');
            $table->bigInteger('UserID');
            $table->bigInteger('AddictionID');

            $table->foreign('UserID')->references('id')->on('Users.Users');
            $table->foreign('AddictionID')->references('AddictionID')->on('Health.Addiction');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Health.AddictionsPerDay');
    }
};
