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
            @Weight DECIMAL(5, 2),
            @Height DECIMAL(4, 2),
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
            SELECT id, FirstName, LastName1, LastName2, BirthDate, U.CreatedAt, RoleName, CountryName, City, PhoneNumber, EmailAddress, FacebookName, Instagram, Twitter, Weight, Height, H.LastUpdatedAt, Age
            FROM Users.Users AS U
            JOIN dbo.Role AS R ON U.RoleID = R.RoleID
            JOIN Users.DemographicInfo AS D ON U.DemographicInfoID = D.DemographicInfoID
            JOIN Demographics.Country AS C ON D.CountryID = C.CountryID
            JOIN Users.ContactInfo AS CI ON U.ContactInfoID = CI.ContactInfoID
            JOIN Users.HealthInfo AS H ON U.HealthInfoID = H.HealthInfoID
            WHERE U.id = @id
        END';

        $listUsers = 'CREATE PROCEDURE sp_listUsers
        AS
        BEGIN
            SELECT id, FirstName, LastName1, LastName2, BirthDate, RoleName, CountryName, City, PhoneNumber, EmailAddress, FacebookName, Instagram, Twitter, Weight, Height, PasswordHash
            FROM Users.Users AS U
            JOIN Users.Password AS P ON U.PasswordID = P.PasswordID
            JOIN Users.DemographicInfo AS D ON U.DemographicInfoID = D.DemographicInfoID
            JOIN Users.ContactInfo AS CI ON U.ContactInfoID = CI.ContactInfoID
            JOIN Users.HealthInfo AS H ON U.HealthInfoID = H.HealthInfoID
            JOIN dbo.Role AS R ON U.RoleID = R.RoleID
            JOIN Demographics.Country AS C ON D.CountryID = C.CountryID
        END';

        $showUser = 'CREATE PROCEDURE sp_showUser
            @id INT
        AS
        BEGIN
            SELECT id, FirstName, LastName1, LastName2, BirthDate, RoleName, CountryName, City, PhoneNumber, EmailAddress, FacebookName, Instagram, Twitter, Weight, Height, PasswordHash
            FROM Users.Users AS U
            JOIN Users.Password AS P ON U.PasswordID = P.PasswordID
            JOIN Users.DemographicInfo AS D ON U.DemographicInfoID = D.DemographicInfoID
            JOIN Users.ContactInfo AS CI ON U.ContactInfoID = CI.ContactInfoID
            JOIN Users.HealthInfo AS H ON U.HealthInfoID = H.HealthInfoID
            JOIN dbo.Role AS R ON U.RoleID = R.RoleID
            JOIN Demographics.Country AS C ON D.CountryID = C.CountryID
        END';

        $updateUser = 'CREATE PROCEDURE sp_updateUser
            @UserID INT,
            @FirstName VARCHAR(20),
            @LastName1 VARCHAR(20),
            @LastName2 VARCHAR(20),
            @BirthDate DATE,
            @RoleID INT,
            @CountryID INT,
            @City VARCHAR(25),
            @PhoneNumber VARCHAR(11),
            @EmailAddress VARCHAR(50),
            @FacebookName VARCHAR(50),
            @Instagram VARCHAR(20),
            @Twitter VARCHAR(20),
            @Weight DECIMAL(5, 2),
            @Height DECIMAL(4, 2),
            @PasswordHash VARCHAR(255)
        AS
        BEGIN
            -- Update DemographicInfo table
            UPDATE Users.DemographicInfo 
            SET City = @City, CountryID = @CountryID
            WHERE DemographicInfoID = (SELECT DemographicInfoID FROM Users.Users WHERE id = @UserID)
        
            -- Update ContactInfo table
            UPDATE Users.ContactInfo
            SET PhoneNumber = @PhoneNumber, EmailAddress = @EmailAddress, FacebookName = @FacebookName, Instagram = @Instagram, Twitter = @Twitter
            WHERE ContactInfoID = (SELECT ContactInfoID FROM Users.Users WHERE id = @UserID)
        
            -- Update HealthInfo table
            UPDATE Users.HealthInfo 
            SET Weight = @Weight, Height = @Height
            WHERE HealthInfoID = (SELECT HealthInfoID FROM Users.Users WHERE id = @UserID)
            
            -- Update Password table
            UPDATE Users.Password
            SET PasswordHash = @PasswordHash
            WHERE PasswordID = (SELECT PasswordID FROM Users.Users WHERE id = @UserID)
        
            -- Update User.User
            UPDATE Users.Users 
            SET FirstName = @FirstName, LastName1 = @LastName1, LastName2 = @LastName2, BirthDate = @BirthDate, RoleID = @RoleID
            WHERE Users.id = @UserID
        END';

        $deleteUser = 'CREATE PROCEDURE sp_deleteUser
            @id INT
        AS
        BEGIN
            DECLARE @DemographicInfoID INT
            DECLARE @ContactInfoID INT
            DECLARE @HealthInfoID INT
            DECLARE @PasswordID INT
            SET @DemographicInfoID = (SELECT @DemographicInfoID FROM Users.Users WHERE Users.id = @id)
            SET @ContactInfoID = (SELECT @ContactInfoID FROM Users.Users WHERE Users.id = @id)
            SET @HealthInfoID = (SELECT @HealthInfoID FROM Users.Users WHERE Users.id = @id)
            SET @PasswordID = (SELECT @PasswordID FROM Users.Users WHERE Users.id = @id)
                
            DELETE FROM Users.Users WHERE Users.id = @id
            DELETE FROM Users.DemographicInfo WHERE DemographicInfoID = @DemographicInfoID
            DELETE FROM Users.ContactInfo WHERE ContactInfoID = @ContactInfoID
            DELETE FROM Users.HealthInfo WHERE HealthInfoID = @HealthInfoID
            DELETE FROM Users.Password WHERE PasswordID = @PasswordID
        END';

        $insertDish = 'CREATE PROCEDURE sp_insertDish
            @DishName VARCHAR(50),
            @Calories DECIMAL(7, 2),
            @Fats DECIMAL(7, 2),
            @Collesterol DECIMAL(7, 2),
            @Sodium DECIMAL(7, 2),
            @Fiber DECIMAL(7, 2),
            @Carbs DECIMAL(7, 2),
            @Protein DECIMAL(7, 2)
        AS
        BEGIN
            -- Insert to NutritionFactsPer100G table
            INSERT INTO Health.NutritionFactsPer100G (Calories, Fats, Collesterol, Sodium, Fiber, Carbs, Protein)
            VALUES (@Calories, @Fats, @Collesterol, @Sodium, @Fiber, @Carbs, @Protein)
        
            -- Get NutritionFactsPer100G generated ID
            DECLARE @NutritionFactsID INT
            SET @NutritionFactsID = SCOPE_IDENTITY()
        
            -- Insert to Dish table with Foreign Keys
            INSERT INTO Health.Dish (DishName, NutritionFactsID)
            VALUES (@DishName, @NutritionFactsID)
        END';

        $listDishes = 'CREATE PROCEDURE sp_listDishes
        AS
        BEGIN
            SELECT DishID, DishName, Calories, Fats, Collesterol, Sodium, Fiber, Carbs, Protein
            FROM Health.Dish AS D
            JOIN Health.NutritionFactsPer100G AS NF ON D.NutritionFactsID = NF.NutritionFactsID
        END';

        $showDish = 'CREATE PROCEDURE sp_showDish
            @DishID INT
        AS
        BEGIN
            SELECT DishID, DishName, Calories, Fats, Collesterol, Sodium, Fiber, Carbs, Protein
            FROM Health.Dish AS D
            JOIN Health.NutritionFactsPer100G AS NF ON D.NutritionFactsID = NF.NutritionFactsID
            WHERE D.DishID = @DishID
        END';

        $updateDish = 'CREATE PROCEDURE sp_updateDish
            @DishID INT,
            @DishName VARCHAR(50),
            @Calories DECIMAL(7, 2),
            @Fats DECIMAL(7, 2),
            @Collesterol DECIMAL(7, 2),
            @Sodium DECIMAL(7, 2),
            @Fiber DECIMAL(7, 2),
            @Carbs DECIMAL(7, 2),
            @Protein DECIMAL(7, 2)
        AS
        BEGIN
            UPDATE Health.Dish
            SET DishName = @DishName
            WHERE DishID = @DishID
        
            UPDATE Health.NutritionFactsPer100G
            SET Calories = @Calories, Fats = @Fats, Collesterol = @Collesterol, Sodium = @Sodium, Fiber = @Fiber, Carbs = @Carbs, Protein = @Protein
            WHERE NutritionFactsID = (SELECT NutritionFactsID 
                                    FROM Health.Dish 
                                    WHERE DishID = @DishID)
        END';

        $deleteDish = 'CREATE PROCEDURE sp_deleteDish
            @DishID INT
        AS
        BEGIN
            DECLARE @NutritionFactsID INT
            SET @NutritionFactsID = (SELECT NutritionFactsID FROM Health.Dish WHERE DishID = @DishID)
        
            DELETE FROM Health.Dish WHERE DishID = @DishID
            DELETE FROM Health.NutritionFactsPer100G WHERE NutritionFactsID = @NutritionFactsID
        END';

        $listAddictions = 'CREATE PROCEDURE sp_listAddictions
        AS
        BEGIN
            SELECT AddictionID, AddictionName, UnitName
            FROM Health.Addiction as H
            JOIN Health.Unit AS U ON H.UnitID = U.UnitID
        END';

        $showAddiction = 'CREATE PROCEDURE sp_showAddiction
            @AddictionID INT
        AS
        BEGIN
            SELECT AddictionID, AddictionName, UnitName
            FROM Health.Addiction AS A
            JOIN Health.Unit as U ON A.UnitID = U.UnitID
            WHERE A.AddictionID = @AddictionID
        END';

        $updateAddiction = 'CREATE PROCEDURE sp_updateAddiction
            @AddictionID INT,
            @AddictionName VARCHAR(50),
            @UnitID INT
        AS
        BEGIN
            UPDATE Health.Addiction
            SET AddictionName = @AddictionName, UnitID = @UnitID
            WHERE AddictionID = @AddictionID
        END';

        $listActivities = 'CREATE PROCEDURE sp_listActivities
        AS
        BEGIN
            SELECT ActivityID, ActivityName, CaloriesBurnedPerHour, MuscleGroupName
            FROM Health.PhysicalActivity as H
            JOIN Health.MuscleGroup as MG ON H.MuscleGroupID = MG.MuscleGroupID
        END';

        $showActivity = 'CREATE PROCEDURE sp_showActivity
            @ActivityID INT
        AS
        BEGIN
            SELECT ActivityID, ActivityName, CaloriesBurnedPerHour, MuscleGroupName
            FROM Health.PhysicalActivity as H
            JOIN Health.MuscleGroup as MG ON H.MuscleGroupID = MG.MuscleGroupID
            WHERE H.ActivityID = @ActivityID
        END';

        $updateActivity = 'CREATE PROCEDURE sp_updateActivity
            @ActivityID INT,
            @ActivityName VARCHAR(50),
            @CaloriesBurnedPerHour INT,
            @MuscleGroupID INT
        AS
        BEGIN
            UPDATE Health.PhysicalActivity
            SET ActivityName = @ActivityName, CaloriesBurnedPerHour = @CaloriesBurnedPerHour, MuscleGroupID = @MuscleGroupID
            WHERE ActivityID = @ActivityID
        END';

        $insertBackup = "CREATE PROCEDURE sp_insertBackup
        @UserID INT,
        @Name VARCHAR(150)
        AS
        BEGIN
            DECLARE @lastBackupID INT
        
            INSERT INTO [dbo].[Backup] (Date, Name, UserID)
            VALUES (GETDATE(), @Name, @UserID)
        
            SET @lastBackupID = SCOPE_IDENTITY()
        
            DECLARE @backupName VARCHAR(100)
            SET @backupName = 'c:\backups\BeArtBackup' + CONVERT(NVARCHAR(150), @lastBackupID) + '.bak'
        
            BACKUP DATABASE BeArt 
            TO DISK = @backupName
            WITH NOFORMAT,
            INIT,
            NAME = @Name
        END";

        $getDashboardStats = 'CREATE PROCEDURE sp_getDashboardStats
        AS
        BEGIN
            SELECT 
                (SELECT COUNT(*) FROM Health.Dish) AS TotalDishes,
                (SELECT COUNT(*) FROM Health.Addiction) AS TotalAddictions,
                (SELECT COUNT(*) FROM Health.PhysicalActivity) AS TotalActivities,
                (SELECT COUNT(*) FROM Users.Users WHERE Users.RoleID = 1 OR Users.RoleID = 2 OR Users.RoleID = 3) AS TotalEmployees,
                (SELECT COUNT(*) FROM Users.Users WHERE Users.RoleID = 4) AS TotalUsers,
                (SELECT COUNT(*) FROM [dbo].[Backup]) AS TotalBackups;
        END';

        $deleteBackup = "CREATE PROCEDURE sp_deleteBackup
            @BackupID INT
        AS
        BEGIN
            DELETE FROM [dbo].[Backup] WHERE BackupID = @BackupID
            DECLARE @backupName VARCHAR(100) = 'DEL c:\backups\BeArtBackup' + CONVERT(NVARCHAR(150), @BackupID) + '.bak'
            -- Borra el archivo
            EXEC xp_cmdshell @backupName
        END";

        $listBackups = "CREATE PROCEDURE sp_listBackups
        AS
        BEGIN
            SELECT BackupID, Date, Name, CONCAT(FirstName, ' ', LastName1, ' ', LastName2) AS 'User'
            FROM [dbo].[Backup] AS B
            JOIN Users.Users AS U ON B.UserID = U.id
        END";

        $restoreBackup = "CREATE PROCEDURE sp_listBackups
        AS
        BEGIN
            SELECT BackupID, Date, Name, CONCAT(FirstName, ' ', LastName1, ' ', LastName2) AS 'User'
            FROM [dbo].[Backup] AS B
            JOIN Users.Users AS U ON B.UserID = U.id
        END";

        DB::statement($insertUser);
        DB::statement($getUserProfile);
        DB::statement($listUsers);
        DB::statement($showUser);
        DB::statement($updateUser);
        DB::statement($deleteUser);
        DB::statement($insertDish);
        DB::statement($listDishes);
        DB::statement($showDish);
        DB::statement($updateDish);
        DB::statement($deleteDish);
        DB::statement($listAddictions);
        DB::statement($showAddiction);
        DB::statement($updateAddiction);
        DB::statement($listActivities);
        DB::statement($showActivity);
        DB::statement($updateActivity);
        DB::statement($insertBackup);
        DB::statement($getDashboardStats);
        DB::statement($deleteBackup);
        DB::statement($listBackups);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_insertUser;');
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_getUserProfile;');
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_listUsers;');
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_showUser;');
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_updateUser;');
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_deleteUser;');
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_insertDish;');
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_listDishes;');
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_showDish;');
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_updateDish;');
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_deleteDish;');
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_listAddictions;');
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_showAddiction;');
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_updateAddiction;');
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_listActivities;');
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_showActivity;');
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_updateActivity;');
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_insertBackup;');
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_getDashboardStats;');
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_deleteBackup;');
        DB::statement('DROP PROCEDURE IF EXISTS dbo.sp_listBackups;');
    }
};
