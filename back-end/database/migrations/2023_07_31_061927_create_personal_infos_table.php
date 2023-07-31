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
        Schema::create('Person.PersonalInfo', function (Blueprint $table) {
            $table->id('PersonalInfoID');
            $table->decimal('Weight', 18, 2);
            $table->decimal('Height', 18, 2);
            $table->integer('Age')->virtualAs('DATEDIFF(YEAR, (SELECT BirthDate FROM Person.Person WHERE Person.PersonalInfo.PersonalInfoID = Person.Person.PersonalInfoID), GETDATE())')->storedAs('DATEDIFF(YEAR, (SELECT BirthDate FROM Person.Person WHERE Person.PersonalInfo.PersonalInfoID = Person.Person.PersonalInfoID), GETDATE())');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Person.PersonalInfo');
    }
};
