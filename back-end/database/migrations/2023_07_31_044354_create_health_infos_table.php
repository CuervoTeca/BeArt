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
        Schema::create('Users.HealthInfo', function (Blueprint $table) {
            $table->id('HealthInfoID');
            $table->decimal('Weight', 5, 2);
            $table->decimal('Height', 4, 2);
            $table->dateTime('CreatedAt')->default(DB::raw('GETDATE()'));
            $table->dateTime('LastUpdatedAt')->default(DB::raw('GETDATE()'));
        });

        DB::unprepared('
        CREATE TRIGGER tr_updateHealthInfoLastUpdatedAtField
            ON Users.HealthInfo
            AFTER UPDATE
        AS
        BEGIN
            UPDATE Users.HealthInfo
            SET LastUpdatedAt = GETDATE()
            FROM Users.HealthInfo as H
            INNER JOIN inserted ON H.HealthInfoID = inserted.HealthInfoID;
        END
    ');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Users.HealthInfo');
    }
};
