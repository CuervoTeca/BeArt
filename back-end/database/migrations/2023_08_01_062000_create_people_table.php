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
        Schema::create('Person.Person', function (Blueprint $table) {
            $table->id('PersonID');
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
            $table->foreign('DemographicInfoID')->references('DemographicInfoID')->on('Person.DemographicInfo');
            $table->foreign('ContactInfoID')->references('ContactInfoID')->on('Person.ContactInfo');
            $table->foreign('HealthInfoID')->references('HealthInfoID')->on('Person.HealthInfo');
            $table->foreign('PasswordID')->references('PasswordID')->on('Person.Password');
        });

        DB::statement('ALTER TABLE Person.Person ADD Age AS DATEDIFF(YEAR, BirthDate, GETDATE())');

        DB::unprepared('
            CREATE TRIGGER tr_updatePersonLastUpdatedAtField
                ON Person.Person
                AFTER UPDATE
            AS
            BEGIN
                UPDATE Person.Person
                SET LastUpdatedAt = GETDATE()
                FROM Person.Person as P
                INNER JOIN inserted ON P.PersonID = inserted.PersonID;
            END
        ');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Person.Person');
    }
};
