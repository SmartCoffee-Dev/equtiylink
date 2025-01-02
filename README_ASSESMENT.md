# Ejercicio Fullstack 2024 – Equity Link

- [x] Crear una app que use como frontend ReactJS y como backend una API desarrollada en Laravel

- [x] La aplicación consiste en un dashboard al que se puede entrar por autenticación de email y
contraseña.

- [x] Se debe crear una mecánica para manejar los mensajes de error de autorización para mostrarse en
el back. Por ejemplo con un Toast.

- [x] Al entrar en la aplicación. Debe mostrar un layout con una barra lateral que maneje el menú principal
y una cabecera donde se muestre el nombre del usuario.

- [x] Se debe implementar la mecánica de roles
y permisos de Spatie para mostrar u ocultar un botón en la cabecera que muestre la sección de
administración de usuarios.

- [x] Dentro de la sección de administración de usuarios se deben poder dar de alta permisos y usuarios,
y asignar permisos a usuarios

- [x] La app solo llevará una sección en el menú lateral. Facturas.

- [x] En esta sección se debe poder cargar el archivo XML de una factura.

- [x] Una vez cargado, se deben almacenar los datos de ese XML en una tabla de nombre invoices.

- [x] Los datos que se deben almacenar son:
• UUID
• Folio (Si no tiene, usar la útima sección del UUID como folio)
• Emisor
• Receptor
• Moneda
• Total
• Tipo de cambio del día. Este se debe consultar con la API del Diario oficial de la federación.

- [ ] El tipo de cambio del día se debe consultar con la API del Diario oficial de la federación.

- [x] La visibilidad tanto de la sección de facturas como del botón de carga de facturas, deben estar
regidos por el permiso "view-invoices" y "upload-invoices".

- [x] Al terminar de cargar la factura, debe mostrar un mensaje de éxito usando la librería SweetAlert y
debe mostrarla en una tabla con las columnas igual a los datos almacenados.


Se considerarán.
• UI/UX
• Principios de SOLID
• Principios de CLEAN CODE
• Mantenibilidad y escalabilidad del código