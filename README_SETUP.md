# Equity Link - Prueba técnica

## Puesta en marcha (Desarrollo)
Para poner en marcha el proyecto de este repositorio,
es necesario:

1. Clonar el repositorio.

```
git clone https://github.com/SmartCoffee-Dev/equtiylink.git
```

2. Dirigirse al directorio del proyecto

```
cd equtiylink
```

3. Instalar las dependencias del backend

```
composer install
```

4. Incluir las credenciales para la base de datos en el archivo `.env`

```
DB_CONNECTION=
DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

5. Instalar las dependencias del frontend

```
npm i
```

6. Levantar el servidor del backend

```
php artisan serve
```

7. Levantar el servidor del frontend

```
npm run dev
```

8. Ejecutar los seeders de la base de datos

```
php artisan db:seed
```

## Uso (Local)

Cuando el proyecto se inicializa por primera vez, el único 
usuario creado `super.equitylink@yopmail.com`. Para ingresar a la app por primera vez, se debe usar dicho usuario con la contraseña
`password`.

Acto seguido, debe cambiarse la contraseña de dicho usuario. Dicha acción podrá realizarse dentro de `${PROTOCOL}://${DOMAIN}:${PORT}/profile`.