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
            $table->binary('Photo')->nullable();
            $table->bigInteger('RoleID');
            $table->bigInteger('DemographicInfoID');
            $table->bigInteger('ContactInfoID');
            $table->bigInteger('PersonalInfoID');
            $table->bigInteger('PasswordID');
            $table->timestamps();

            $table->foreign('RoleID')->references('RoleID')->on('Role');
            $table->foreign('DemographicInfoID')->references('DemographicInfoID')->on('Person.DemographicInfo');
            $table->foreign('ContactInfoID')->references('ContactInfoID')->on('Person.ContactInfo');
            //$table->foreign('PersonalInfoID')->references('PersonalInfoID')->on('Person.PersonalInfo');
            $table->foreign('PasswordID')->references('PasswordID')->on('Person.Password');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Person.Person');
    }
};
