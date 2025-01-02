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

4. Instalar las dependencias del frontend

```
npm i
```

5. Incluir las credenciales para la base de datos en el archivo `.env`

```
DB_CONNECTION=
DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

6. Ejecutar las migraciones

```
php artisan migrate
```

7. Incluir el token de la api de Banxico en el archivo `.env`

```
BANXICO_TOKEN=
```

8. Configurar las variables de entorno para el envío de correos.

```
MAIL_MAILER=
MAIL_HOST=
MAIL_PORT=
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_ENCRYPTION=
MAIL_FROM_ADDRESS=
MAIL_FROM_NAME=
```

9. Levantar el servidor del backend

```
php artisan serve
```

10. Levantar el servidor del frontend

```
npm run dev
```

## Uso (Local)

Cuando el proyecto se inicializa por primera vez, el único 
usuario creado `super.equitylink@yopmail.com`. Para ingresar a la app por primera vez, se debe usar dicho usuario con la contraseña
`password`.

Acto seguido, debe cambiarse la contraseña de dicho usuario. Dicha acción podrá realizarse dentro de `${PROTOCOL}://${DOMAIN}:${PORT}/profile`.

### Cargar Facturas

1. Para cargar facturas se debe iniciar sesión con un usuario que tenga tanto los permisos de `view-invoices` como de `upload-invoices`, y navegar a  `-> Facturas -> ➕ Invoice`.

2. Se debe cargar el documento dentro del formulario y darle click al botón de enviar.

3. Si la factura está en una divisa no pre-configurada, aparecerá un error indicando que debe establecerse la nomenclatura de la serie a usar para obtener el tipo de cambio.
Dicha serie puede encontrarse en [El Catálogo de series de Banxico](https://www.banxico.org.mx/SieAPIRest/service/v1/doc/catalogoSeries), dentro de: `-> Tipos de cambio y resultados históricos de las subastas -> Tipos de cambio nominal y resultados históricos de las subastas -> Información mensual -> Tipos de cambio de otras divisas`. La serie requerida es la referida al `Tipo en pesos` de la divisa correspondiente.

> [!NOTE]
> Nota: Las divisas preconfiguradas, son las __*divisas que conforman la canasta del DEG: _USD, EUR, JPY, GBP, CAD*__.

### Crear usuarios

1. Iniciar sesión con una cuenta que tenga permisos de `user_create`.

2. Dirigirse a `->👥 User Management -> ➕ User`;

3. Indicar el **nombre** y el **email** del usuario.

> [!NOTE]  
> Para iniciar sesiójn por primera vez con el usuario, deberá restablecer la contraseña.

### Autorizar usuarios

1. Iniciar sesión con una cuenta que tenga asignado el permiso `user_permission_create`.

2. Dirigirse a `->👥 User Management`.

3. Expandir el apartado del usuario al que se le desea asignar permisos.

4. Escoger en el selector de permisos, el permisos que se desea asignar.

### Crear permisos

1. Iniciar sesión con una cuenta que tenga permisos de `permission_create`.

2. Dirigirse a `->👥 User Management -> ➕ Permission`;

3. Indicar el **nombre** para el permiso.