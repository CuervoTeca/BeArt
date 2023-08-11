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
        DB::statement("INSERT INTO Demographics.Country (CountryName) VALUES
            ('Australia'),
            ('Austria'),
            ('Azerbaiyán'),
            ('Anguilla'),
            ('Argentina'),
            ('Armenia'),
            ('Bielorrusia'),
            ('Belice'),
            ('Bélgica'),
            ('Bermudas'),
            ('Bulgaria'),
            ('Brasil'),
            ('Reino Unido'),
            ('Hungría'),
            ('Vietnam'),
            ('Haiti'),
            ('Guadalupe'),
            ('Alemania'),
            ('Países Bajos, Holanda'),
            ('Grecia'),
            ('Georgia'),
            ('Dinamarca'),
            ('Egipto'),
            ('Israel'),
            ('India'),
            ('Irán'),
            ('Irlanda'),
            ('España'),
            ('Italia'),
            ('Kazajstán'),
            ('Camerún'),
            ('Canadá'),
            ('Chipre'),
            ('Kirguistán'),
            ('China'),
            ('Costa Rica'),
            ('Kuwait'),
            ('Letonia'),
            ('Libia'),
            ('Lituania'),
            ('Luxemburgo'),
            ('México'),
            ('Moldavia'),
            ('Mónaco'),
            ('Nueva Zelanda'),
            ('Noruega'),
            ('Polonia'),
            ('Portugal'),
            ('Reunión'),
            ('Rusia'),
            ('El Salvador'),
            ('Eslovaquia'),
            ('Eslovenia'),
            ('Surinam'),
            ('Estados Unidos'),
            ('Tadjikistan'),
            ('Turkmenistan'),
            ('Islas Turcas y Caicos'),
            ('Turquía'),
            ('Uganda'),
            ('Uzbekistán'),
            ('Ucrania'),
            ('Finlandia'),
            ('Francia'),
            ('República Checa'),
            ('Suiza'),
            ('Suecia'),
            ('Estonia'),
            ('Corea del Sur'),
            ('Japón'),
            ('Croacia'),
            ('Rumanía'),
            ('Hong Kong'),
            ('Indonesia'),
            ('Jordania'),
            ('Malasia'),
            ('Singapur'),
            ('Taiwan'),
            ('Bosnia y Herzegovina'),
            ('Bahamas'),
            ('Chile'),
            ('Colombia'),
            ('Islandia'),
            ('Corea del Norte'),
            ('Macedonia'),
            ('Malta'),
            ('Pakistán'),
            ('Papúa-Nueva Guinea'),
            ('Perú'),
            ('Filipinas'),
            ('Arabia Saudita'),
            ('Tailandia'),
            ('Emiratos árabes Unidos'),
            ('Groenlandia'),
            ('Venezuela'),
            ('Zimbabwe'),
            ('Kenia'),
            ('Algeria'),
            ('Líbano'),
            ('Botsuana'),
            ('Tanzania'),
            ('Namibia'),
            ('Ecuador'),
            ('Marruecos'),
            ('Ghana'),
            ('Siria'),
            ('Nepal'),
            ('Mauritania'),
            ('Seychelles'),
            ('Paraguay'),
            ('Uruguay'),
            ('Congo (Brazzaville)'),
            ('Cuba'),
            ('Albania'),
            ('Nigeria'),
            ('Zambia'),
            ('Mozambique'),
            ('Angola'),
            ('Sri Lanka'),
            ('Etiopía'),
            ('Túnez'),
            ('Bolivia'),
            ('Panamá'),
            ('Malawi'),
            ('Liechtenstein'),
            ('Bahrein'),
            ('Barbados'),
            ('Chad'),
            ('Man, Isla de'),
            ('Jamaica'),
            ('Malí'),
            ('Madagascar'),
            ('Senegal'),
            ('Togo'),
            ('Honduras'),
            ('República Dominicana'),
            ('Mongolia'),
            ('Irak'),
            ('Sudáfrica'),
            ('Aruba'),
            ('Gibraltar'),
            ('Afganistán'),
            ('Andorra'),
            ('Antigua y Barbuda'),
            ('Bangladesh'),
            ('Benín'),
            ('Bután'),
            ('Islas Virgenes Británicas'),
            ('Brunéi'),
            ('Burkina Faso'),
            ('Burundi'),
            ('Camboya'),
            ('Cabo Verde'),
            ('Comores'),
            ('Congo (Kinshasa)'),
            ('Cook, Islas'),
            ('Costa de Marfil'),
            ('Djibouti, Yibuti'),
            ('Timor Oriental'),
            ('Guinea Ecuatorial'),
            ('Eritrea'),
            ('Feroe, Islas'),
            ('Fiyi'),
            ('Polinesia Francesa'),
            ('Gabón'),
            ('Gambia'),
            ('Granada'),
            ('Guatemala'),
            ('Guernsey'),
            ('Guinea'),
            ('Guinea-Bissau'),
            ('Guyana'),
            ('Jersey'),
            ('Kiribati'),
            ('Laos'),
            ('Lesotho'),
            ('Liberia'),
            ('Maldivas'),
            ('Martinica'),
            ('Mauricio'),
            ('Myanmar'),
            ('Nauru'),
            ('Antillas Holandesas'),
            ('Nueva Caledonia'),
            ('Nicaragua'),
            ('Níger'),
            ('Norfolk Island'),
            ('Omán'),
            ('Isla Pitcairn'),
            ('Qatar'),
            ('Ruanda'),
            ('Santa Elena'),
            ('San Cristobal y Nevis'),
            ('Santa Lucía'),
            ('San Pedro y Miquelón'),
            ('San Vincente y Granadinas'),
            ('Samoa'),
            ('San Marino'),
            ('San Tomé y Príncipe'),
            ('Serbia y Montenegro'),
            ('Sierra Leona'),
            ('Islas Salomón'),
            ('Somalia'),
            ('Sudán'),
            ('Swazilandia'),
            ('Tokelau'),
            ('Tonga'),
            ('Trinidad y Tobago'),
            ('Tuvalu'),
            ('Vanuatu'),
            ('Wallis y Futuna'),
            ('Sáhara Occidental'),
            ('Yemen'),
            ('Puerto Rico');");

        DB::statement("INSERT INTO Health.MuscleGroup (MuscleGroupName) VALUES 
            ('Pectorales'),
            ('Espalda'),
            ('Hombros'),
            ('Bíceps'),
            ('Tríceps'),
            ('Cuádriceps'),
            ('Isquiotibiales'),
            ('Glúteos'),
            ('Abdominales'),
            ('Deltoides'),
            ('Trapecio'),
            ('Antebrazo'),
            ('Gemelos'),
            ('Sóleo'),
            ('Triceps sural'),
            ('Dorsales'),
            ('Lumbares'),
            ('Trapecios'),
            ('Trapezoidales'),
            ('Oblicuos');");

        DB::statement("INSERT INTO dbo.Role (RoleName, Description) VALUES
            ('Dueño', 'Rol principal, con privilegios de administración del sistema'),
            ('Admin. de BD', 'Rol con privilegios para administrar la base de datos'),
            ('Admin. de registros', 'Rol con privilegios para hacer operaciones CRUD en tablas del sistema'),
            ('Usuario', 'Rol estándar de usuario con acceso limitado');");

        DB::statement("INSERT INTO Health.Unit (UnitName) VALUES 
            ('Unidades'),
            ('Miligramos'),
            ('Gramos'),
            ('Kilogramos'),
            ('Mililitros'),
            ('Litros'),
            ('Horas'),
            ('Minutos'),
            ('Segundos'),
            ('Porciones');");

        DB::statement("INSERT INTO Health.Addiction (AddictionName, UnitID) VALUES 
            ('Tabaco', 1),
            ('Alcohol', 6),
            ('Cafeína', 3),
            ('Nicotina', 3),
            ('Cocaína', 3),
            ('Heroína', 3),
            ('Metanfetamina', 3),
            ('Juegos de Azar', 7),
            ('Compras compulsivas', 1),
            ('Internet', 7),
            ('Redes Sociales', 7),
            ('Videojuegos', 7),
            ('Trabajo', 7),
            ('Ejercicio', 7),
            ('Comida chatarra', 3),
            ('Azúcar', 3),
            ('Cafeína', 3);");

        DB::statement("INSERT INTO Users.ContactInfo (PhoneNumber, EmailAddress, FacebookName, Instagram, Twitter) VALUES
            ('6642104733', 'maria.gomez@gmail.com', 'Maria Gómez', 'maria_gomez01', '@mariagomez'),
            ('6640784312', 'juan,rodriguez@gmail.com', 'Juan Rodríguez', 'juan_rodriguez02', '@juanrodriguez'),
            ('6649003532', 'carlos.fernandez@gmail.com', 'Carlos Fernández', 'carlos_fernandez03', '@carlosfernandez'),
            ('6647641195', 'laura.martinez@gmail.com', 'Laura Martínez', 'laura_martinez04', '@lauramartinez'),
            ('6641902678', 'ana.lopez@gmail.com', 'Ana López', 'ana_lopez05', '@analopez'),
            ('6643852126', 'pedro.garcia@gmail.com', 'Pedro García', 'pedro_garcia06', '@pedrogarcia'),
            ('6648347674', 'sofia.hernandez@gmail.com', 'Sofía Hernández', 'sofia_hernandez07', '@sofiahernandez'),
            ('6647643920', 'luis.perez@gmail.com', 'Luis Pérez', 'luis_perez08', '@luisperez'),
            ('6641238764', 'elena.gonzalez@gmail.com', 'Elena González', 'elena_gonzalez09', '@elenagonzalez'),
            ('6648743348', 'manuel.ramirez@gmail.com', 'Manuel Ramírez', 'manuel_ramirez10', '@manuelramirez'),
            ('6642931317', 'marta.sanchez@gmail.com', 'Marta Sánchez', 'marta_sanchez11', '@martasanchez'),
            ('6640938271', 'javier.castro@gmail.com', 'Javier Castro', 'javier_castro12', '@javiercastro'),
            ('6643210822', 'patricia.orozco@gmail.com', 'Patricia Orozco', 'patricia_orozco13', '@patriciaorozco'),
            ('6632941076', 'diego.acosta@gmail.com', 'Diego Acosta', 'diego_acosta14', '@diegoacosta'),
            ('6631204839', 'carmen.vazquez@gmail.com', 'Carmen Vázquez', 'carmen_vazquez15', '@carmenvazquez'),
            ('6639425542', 'andres.leal@gmail.com', 'Andrés Leal', 'andres_leal16', '@andresleal'),
            ('6637631211', 'isabel.ibarra@gmail.com', 'Isabel Ibarra', 'isabel_ibarra17', '@isabelibarra'),
            ('6633455807', 'alejandro.mendoza@gmail.com', 'Alejandro Mendoza', 'alejandro_mendoza18', '@alejandromendoza'),
            ('6634143893', 'rosa.guzman@gmail.com', 'Rosa Guzmán', 'rosa_guzman19', '@rosaguzman'),
            ('6638850330', 'alexa.moreno@gmail.com', 'Alexa Moreno', 'alexa_moreno20', '@alexamoreno');");

        DB::statement("INSERT INTO Health.NutritionFactsPer100G (Calories, Fats, Collesterol, Sodium, Fiber, Carbs, Protein) VALUES 
            (120, 5, 20, 300, 2, 15, 10),
            (220, 12, 30, 600, 4, 20, 15),
            (80, 3, 10, 200, 1, 10, 8),
            (300, 15, 40, 800, 3, 25, 20),
            (180, 8, 25, 400, 2, 18, 12),
            (150, 6, 15, 350, 1, 20, 8),
            (250, 10, 30, 700, 2, 22, 15),
            (90, 4, 5, 250, 1, 12, 6),
            (160, 7, 20, 400, 2, 14, 10),
            (190, 9, 25, 450, 3, 15, 12),
            (280, 14, 35, 600, 4, 20, 18),
            (110, 5, 15, 300, 2, 10, 10),
            (240, 12, 20, 550, 3, 18, 14),
            (200, 10, 30, 400, 2, 16, 15),
            (320, 15, 40, 650, 5, 25, 22),
            (130, 6, 20, 250, 2, 12, 8),
            (180, 8, 25, 350, 3, 16, 12),
            (150, 7, 10, 300, 1, 14, 6),
            (210, 9, 20, 450, 2, 18, 10),
            (280, 12, 25, 500, 3, 22, 14),
            (90, 4, 5, 200, 1, 10, 6),
            (170, 8, 15, 350, 2, 16, 8),
            (250, 10, 30, 600, 4, 22, 12),
            (330, 15, 40, 700, 5, 28, 20),
            (120, 6, 15, 250, 2, 12, 8),
            (190, 8, 20, 400, 3, 15, 10),
            (140, 6, 10, 300, 1, 14, 6),
            (220, 10, 30, 500, 2, 20, 12),
            (290, 14, 35, 650, 4, 25, 18),
            (100, 5, 10, 200, 1, 10, 6),
            (160, 7, 20, 350, 2, 15, 8),
            (240, 11, 25, 550, 3, 20, 12),
            (310, 15, 40, 750, 5, 28, 22),
            (130, 6, 15, 250, 2, 12, 10),
            (200, 8, 20, 400, 3, 16, 12),
            (150, 7, 10, 300, 1, 14, 8),
            (230, 10, 30, 500, 2, 22, 14),
            (300, 15, 35, 700, 4, 28, 18),
            (110, 5, 10, 200, 1, 12, 6),
            (170, 7, 20, 350, 2, 16, 8),
            (250, 12, 25, 600, 3, 20, 12),
            (320, 15, 40, 800, 5, 25, 20);");

        DB::statement("INSERT INTO Health.Dish (DishName, NutritionFactsID) VALUES 
            ('Ensalada César', 1),
            ('Pasta Alfredo', 2),
            ('Sopa de Tomate', 3),
            ('Filete de Salmón', 4),
            ('Tacos de Pollo', 5),
            ('Pizza Margarita', 6),
            ('Hamburguesa Clásica', 7),
            ('Arroz con Verduras', 8),
            ('Ceviche de Camarón', 9),
            ('Lasaña de Carne', 10),
            ('Enchiladas Verdes', 11),
            ('Sushi Variado', 12),
            ('Pollo al Horno', 13),
            ('Pastel de Papa', 14),
            ('Cazuela de Mariscos', 15),
            ('Fajitas de Res', 16),
            ('Risotto de Champiñones', 17),
            ('Cordero a la Miel', 18),
            ('Tarta de Manzana', 19),
            ('Pimientos Rellenos', 20),
            ('Tacos de carne asada', 21),
            ('Tarta de queso', 22),
            ('Cochinita pibil', 23),
            ('Salmón a la parrilla', 24),
            ('Tostadas de Ceviche', 25),
            ('Mole poblano', 26),
            ('Tacos de pescado', 27),
            ('Pollo teriyaki', 28),
            ('Pescado con papas fritas', 29),
            ('Cordero al horno', 30),
            ('Albóndigas en salsa', 31),
            ('Sopa de lentejas', 32),
            ('Costillas BBQ', 33),
            ('Lasaña vegetariana', 34),
            ('Empanadas de carne', 35),
            ('Mixiote', 36),
            ('Barbacoa', 37),
            ('Chilaquiles rojos', 38),
            ('Birria', 39),
            ('Sope de frijol', 40);");

        DB::statement("INSERT INTO [Health].[PhysicalActivity] (ActivityName, CaloriesBurnedPerHour, MuscleGroupID)
        VALUES
            ('Correr', 500, 6),
            ('Levantamiento de Pesas', 300, 2),
            ('Natación', 400, 8),
            ('Flexiones de Pecho', 200, 1),
            ('Sentadillas', 250, 6),
            ('Caminar', 200, 6),
            ('Ciclismo', 350, 7),
            ('Zancadas', 280, 6),
            ('Flexiones de Tríceps', 180, 5),
            ('Press de Banca', 280, 1),
            ('Remo', 320, 2),
            ('Flexiones de Hombro', 220, 3),
            ('Abdominales Cruzados', 150, 9),
            ('Sentadillas Sumo', 270, 6),
            ('Burpees', 400, 9),
            ('Saltar la Cuerda', 300, 6),
            ('Prensa de Piernas', 320, 6),
            ('Dominadas', 250, 2),
            ('Plancha', 180, 9),
            ('Curl de Bíceps', 160, 4),
            ('Levantamiento de Talones', 220, 14),
            ('Extensiones de Cuádriceps', 240, 6),
            ('Paseo en Bicicleta Estacionaria', 250, 7),
            ('Fondos en Paralelas', 200, 5),
            ('Press de Hombros', 260, 10);");

            $hash = '$2y$10$LXUiwzFECyU1.CW0mJcWgOWQAD0afGRNoAgtOVDrlx1v9g5WM5dkq';

            DB::statement("EXEC sp_insertUser 'Admin', 'Be', 'Art', '2002-08-14', 'Tijuana', 42, '6641555429', 'admin@beart.com', 'BeArt', 'be_art', '@BeArt', 0.0, 0.0, '$hash'");

            DB::statement("
            IF NOT EXISTS (SELECT * FROM sys.database_principals WHERE name = 'Dueno' AND type_desc = 'DATABASE_ROLE')
            CREATE ROLE Dueno;
        
            IF NOT EXISTS (SELECT * FROM sys.database_principals WHERE name = 'AdminBD' AND type_desc = 'DATABASE_ROLE')
            CREATE ROLE AdminBD;
        
            IF NOT EXISTS (SELECT * FROM sys.database_principals WHERE name = 'AdminRegistros' AND type_desc = 'DATABASE_ROLE')
            CREATE ROLE AdminRegistros;
        
        
            IF NOT EXISTS (SELECT * FROM sys.syslogins WHERE name = 'OwnerBA')
            CREATE LOGIN OwnerBA WITH PASSWORD = '789', DEFAULT_DATABASE=[Master];
    
            IF NOT EXISTS (SELECT * FROM sys.syslogins WHERE name = 'AdminBDBA')
            CREATE LOGIN AdminBDBA WITH PASSWORD = '456', DEFAULT_DATABASE=[Master];
    
            IF NOT EXISTS (SELECT * FROM sys.syslogins WHERE name = 'AdminRegistrosBA')
            CREATE LOGIN AdminRegistrosBA WITH PASSWORD = '123', DEFAULT_DATABASE=[Master];
        
            IF NOT EXISTS (SELECT * FROM sys.database_principals WHERE name = 'BeartDueno' AND type_desc = 'SQL_USER')
            CREATE USER BeartDueno FOR LOGIN OwnerBA;

            IF NOT EXISTS (SELECT * FROM sys.database_principals WHERE name = 'BeartAdminBD' AND type_desc = 'SQL_USER')
            CREATE USER BeartAdminBD FOR LOGIN AdminBDBA;

            IF NOT EXISTS (SELECT * FROM sys.database_principals WHERE name = 'BeartAdminRegistros' AND type_desc = 'SQL_USER')
            CREATE USER BeartAdminRegistros FOR LOGIN AdminRegistrosBA;

        
        
            GRANT SELECT, INSERT, UPDATE, DELETE ON SCHEMA::dbo TO BeartDueno;
            GRANT SELECT, INSERT, UPDATE, DELETE ON SCHEMA::Demographics TO BeartDueno;
            GRANT SELECT, INSERT, UPDATE, DELETE ON SCHEMA::Health TO BeartDueno;
            GRANT SELECT, INSERT, UPDATE, DELETE ON SCHEMA::Social TO BeartDueno;
            GRANT SELECT, INSERT, UPDATE, DELETE ON SCHEMA::Users TO BeartDueno;
        
            GRANT SELECT, INSERT, UPDATE, DELETE ON SCHEMA::dbo TO BeartAdminBD;
        
            GRANT SELECT ON SCHEMA::Demographics TO BeartAdminRegistros;
            GRANT SELECT ON SCHEMA::Health TO BeartAdminRegistros;
            GRANT SELECT ON SCHEMA::Social TO BeartAdminRegistros;
            GRANT SELECT ON SCHEMA::Users TO BeartAdminRegistros;");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
