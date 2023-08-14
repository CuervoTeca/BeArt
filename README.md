# BeArt
BeArt App



"Being in the right place at the right time with the wrong enemy is always better." -Ciaphas Cain


## Como echar a andar el proyecto

### ----------Backend------------

1. Tener instalado xampp y composer

2. Clonar repo

3. Abre xampp, en la fila de Apache da click en config y abre php.ini

4. Busca extension=zip y borra el ; del inicio

5. cd .\back-end\

6. composer install

7. Hacer una copia de .env.example y llamarlo .env

8. php artisan key:generate

9. php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"

10. Crear carpeta en disco c:, llamada backups

11. Correr este comando en el SQLServer, master [
   BACKUP DATABASE BeArt 
   TO DISK = 'c:\backups\BeArtBackupOriginal.bak'
   WITH NOFORMAT,
   INIT,
   NAME = 'Estado original'
   ]

12. php artisan serve


### ----------Frontend------------

1. Tener instalado node

2. cd .\front-end\

3. npm install

4. npm install axios

4. npm install react-data-table-component

5. npm run dev


### -------Usar SQL SERVER---------

1. Ir al disco C: > xampp > php > ext
   - pegar "php_sqlsrv_82_ts_x64.dll" y "php_pdo_sqlsrv_82_ts_x64.dll" (están en la carpeta sqlsrv-drivers)

      - 1.1 Si no sirven, descargar de https://learn.microsoft.com/en-us/sql/connect/php/download-drivers-php-sql-server?view=sql-server-ver16 y usar dependiendo de tu versión de PHP en xampp

2. - Ir al disco C: > xampp > php > php.ini
   - debajo de la linea 951 (o ctrl+F y buscar extension) pegar:
   - extension=php_sqlsrv_82_ts_x64.dll
   - extension=php_pdo_sqlsrv_82_ts_x64.dll

3. En el archivo .env del backend modificar:
   - DB_HOST=tu-ip con tu ipv4, se puede sacar del cmd con ipconfig
   - DB_USERNAME=tu-usuario con tu usuario de SQL Server (temporal sa)
   - DB_PASSWORD=tu-contraseña con tu contraseña de SQL Server (temporal contraseña de sa)

4. Crear bd en SQL Server:

```
USE master
GO
CREATE DATABASE BeArt
GO
```

5. Correr migraciones en la carpeta del backend: php artisan migrate

- NOTA: En caso de no funcionar
   - Abrir SQL Server Configuration Manager
   - Ir a SQL Server Network Configuration
   - Click en Protocols for MSSQLSERVER
   - Click derecho en TCP/IP
   - Click en enable y reiniciar por si acaso

- NOTA: Si sigue sin funcionar
   - ~~-Llorar~~
   - https://www.google.com/?hl=es
   - https://chat.openai.com