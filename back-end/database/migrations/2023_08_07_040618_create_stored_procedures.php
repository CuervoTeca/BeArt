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
        $insertUser = 'CREATE PROCEDURE sp_insertUser
            @FirstName VARCHAR(20),
            @LastName1 VARCHAR(20),
            @LastName2 VARCHAR(20),
            @BirthDate DATE,
            @City VARCHAR(25),
            @CountryID INT,
            @PhoneNumber VARCHAR(11),
            @EmailAddress VARCHAR(50),
            @FacebookName VARCHAR(50),
            @Instagram VARCHAR(20),
            @Twitter VARCHAR(20),
            @Weight DECIMAL(18, 2),
            @Height DECIMAL(18, 2),
            @PasswordHash VARCHAR(255)
        AS
        BEGIN
            -- Insert to DemographicInfo table
            INSERT INTO Users.DemographicInfo (City, CountryID)
            VALUES (@City, @CountryID)
        
            -- Get DemographicInfo generated ID
            DECLARE @DemographicInfoID INT
            SET @DemographicInfoID = SCOPE_IDENTITY()
        
            -- Insert to ContactInfo table
            INSERT INTO Users.ContactInfo (PhoneNumber, EmailAddress, FacebookName, Instagram, Twitter)
            VALUES (@PhoneNumber, @EmailAddress, @FacebookName, @Instagram, @Twitter)
            
            -- Get ContactInfo generated ID
            DECLARE @ContactInfoID INT
            SET @ContactInfoID = SCOPE_IDENTITY()
        
            -- Insert to HealthInfo table
            INSERT INTO Users.HealthInfo (Weight, Height)
            VALUES (@Weight, @Height)
        
            -- Get HealthInfo generated ID
            DECLARE @HealthInfoID INT
            SET @HealthInfoID = SCOPE_IDENTITY()
            
            -- Insert to Password table
            INSERT INTO Users.Password (PasswordHash)
            VALUES (@PasswordHash)
        
            -- Get Password generated ID
            DECLARE @PasswordID INT
            SET @PasswordID = SCOPE_IDENTITY()
        
            -- Insert to User table with Foreign Keys
            INSERT INTO Users.Users (FirstName, LastName1, LastName2, BirthDate, DemographicInfoID, ContactInfoID, HealthInfoID, PasswordID)
            VALUES (@FirstName, @LastName1, @LastName2, @BirthDate, @DemographicInfoID, @ContactInfoID, @HealthInfoID, @PasswordID)
        END';

        $getUserProfile = 'CREATE PROCEDURE sp_getUserProfile
            @id INT
        AS
        BEGIN
            SELECT FirstName, LastName1, LastName2, BirthDate, U.CreatedAt, RoleName, CountryName, City, PhoneNumber, EmailAddress, FacebookName, Instagram, Twitter, Weight, Height, H.LastUpdatedAt, Age
            FROM Users.Users AS U
            JOIN dbo.Role AS R ON U.RoleID = R.RoleID
            JOIN Users.DemographicInfo AS D ON U.DemographicInfoID = D.DemographicInfoID
            JOIN Demographics.Country AS C ON D.CountryID = C.CountryID
            JOIN Users.ContactInfo AS CI ON U.ContactInfoID = CI.ContactInfoID
            JOIN Users.HealthInfo AS H ON U.HealthInfoID = H.HealthInfoID
            WHERE U.id = @id
        END';

        DB::statement($insertUser);
        DB::statement($getUserProfile);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('DROP PROCEDURE IF EXISTS dbo.sp_insertUser;');
    }
};
