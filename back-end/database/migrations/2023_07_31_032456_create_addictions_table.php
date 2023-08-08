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
        Schema::create('Health.Addiction', function (Blueprint $table) {
            $table->id('AddictionID');
            $table->string('AddictionName', 50);
            $table->bigInteger('UnitID');

            $table->foreign('UnitID')->references('UnitID')->on('Health.Unit');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Health.Addiction');
    }
};
