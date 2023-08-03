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
        Schema::create('Social.Like', function (Blueprint $table) {
            $table->dateTime('Date');
            $table->bigInteger('PostID');
            $table->bigInteger('PersonID');

            $table->foreign('PostID')->references('PostID')->on('Social.Post');
            $table->foreign('PersonID')->references('PersonID')->on('Person.Person');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Social.Like');
    }
};
