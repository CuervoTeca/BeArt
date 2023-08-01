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
        Schema::create('Person.HealthInfo', function (Blueprint $table) {
            $table->id('HealthInfoID');
            $table->decimal('Weight', 18, 2);
            $table->decimal('Height', 18, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Person.HealthInfo');
    }
};
