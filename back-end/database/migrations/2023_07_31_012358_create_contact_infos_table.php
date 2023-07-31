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
        Schema::create('Person.ContactInfo', function (Blueprint $table) {
            $table->id('ContactInfoID');
            $table->string('PhoneNumber', 11)->nullable();
            $table->string('EmailAddress', 50);
            $table->string('FacebookName', 50)->nullable();
            $table->string('Instagram', 20)->nullable();
            $table->string('Twitter', 20)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Person.ContactInfo');
    }
};
