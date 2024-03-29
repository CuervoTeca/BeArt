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
        Schema::create('Social.Post', function (Blueprint $table) {
            $table->id('PostID');
            $table->string('Content', 1000);
            $table->dateTime('Date');
            $table->bigInteger('UserID');
            $table->bigInteger('ImageID');

            $table->foreign('UserID')->references('id')->on('Users.Users');
            $table->foreign('ImageID')->references('ImageID')->on('Users.DailyImage');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Social.Post');
    }
};
