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
        DB::statement('CREATE SCHEMA Users');
        DB::statement('CREATE SCHEMA Health');
        DB::statement('CREATE SCHEMA Social');
        DB::statement('CREATE SCHEMA Demographics');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('DROP SCHEMA IF EXISTS Users');
        DB::statement('DROP SCHEMA IF EXISTS Health');
        DB::statement('DROP SCHEMA IF EXISTS Social');
        DB::statement('DROP SCHEMA IF EXISTS Demographics');
    }
};
