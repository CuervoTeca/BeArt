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
        Schema::create('Users.Users', function (Blueprint $table) {
            $table->id();
            $table->string('FirstName', 20);
            $table->string('LastName1', 20);
            $table->string('LastName2', 20)->nullable();
            $table->date('BirthDate');
            //$table->binary('Photo')->nullable();
            $table->dateTime('CreatedAt')->default(DB::raw('GETDATE()'));
            $table->dateTime('LastUpdatedAt')->default(DB::raw('GETDATE()'));
            $table->bigInteger('RoleID')->default(1);
            $table->bigInteger('DemographicInfoID');
            $table->bigInteger('ContactInfoID');
            $table->bigInteger('HealthInfoID');
            $table->bigInteger('PasswordID');

            $table->foreign('RoleID')->references('RoleID')->on('Role');
            $table->foreign('DemographicInfoID')->references('DemographicInfoID')->on('Users.DemographicInfo');
            $table->foreign('ContactInfoID')->references('ContactInfoID')->on('Users.ContactInfo');
            $table->foreign('HealthInfoID')->references('HealthInfoID')->on('Users.HealthInfo');
            $table->foreign('PasswordID')->references('PasswordID')->on('Users.Password');
        });

        DB::statement('ALTER TABLE Users.Users ADD Age AS DATEDIFF(YEAR, BirthDate, GETDATE())');

        DB::unprepared('
            CREATE TRIGGER tr_updateUsersLastUpdatedAtField
                ON Users.Users
                AFTER UPDATE
            AS
            BEGIN
                UPDATE Users.Users
                SET LastUpdatedAt = GETDATE()
                FROM Users.Users as U
                INNER JOIN inserted ON U.id = inserted.id;
            END
        ');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Users.Users');
    }
};
