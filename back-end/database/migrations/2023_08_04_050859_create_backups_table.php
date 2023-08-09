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
        Schema::create('Backup', function (Blueprint $table) {
            $table->id('BackupID');
            $table->dateTime('Date');
            $table->string('Name', 150);
            $table->bigInteger('UserID');

            $table->foreign('UserID')->references('id')->on('Users.Users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Backup');
    }
};
