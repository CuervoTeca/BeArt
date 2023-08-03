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
        Schema::create('Social.Follower', function (Blueprint $table) {
            $table->dateTime('FollowDate');
            $table->bigInteger('FollowerID');
            $table->bigInteger('FolloweeID');

            $table->foreign('FollowerID')->references('PersonID')->on('Person.Person');
            $table->foreign('FolloweeID')->references('PersonID')->on('Person.Person');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Social.Follower');
    }
};
