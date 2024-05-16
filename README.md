# PROYECTO N7: LLAMITA SPORT

Este proyecto es una aplicación web desarrollada con el stack MEAN (MongoDB, Express, Angular, Node.js). A continuación, se detallan los pasos necesarios para configurar y ejecutar el proyecto localmente.

![MongoDB](https://www.turing.com/blog/wp-content/uploads/2022/02/Mongo-DB-Features.jpg) ![Express NodeJs](https://i.ytimg.com/vi/wVo-UMit5Ig/maxresdefault.jpg) ![Angular](https://angular.io/assets/images/logos/angular/angular.png)

## Estructura del Proyecto

El proyecto se divide en dos partes principales: el cliente (`client`) creado con Angular y el servidor (`backend`) construido con Express y Node.js.

### Paso 1: Estructura del Proyecto

1. **Cliente Angular**:
   - La base del cliente se crea con `ng new`.
   - La carpeta `client` contiene la aplicación Angular.
2. **Servidor Express**:
   - La carpeta raíz aloja el servidor Express y la configuración de la base de datos.

### Paso 2: Configuración de la Base de Datos

1. Asegúrate de tener **MongoDB** instalado localmente o utiliza **MongoDB Atlas** para una base de datos en la nube.
2. Crea una base de datos llamada `llamitasport_db`.

### Paso 3: Configuración del Servidor y Conexión a la Base de Datos

1. Dentro de la carpeta `backend`, ejecuta `npm init -y` para iniciar un nuevo proyecto Node.js.
2. Instala **Express** y **Mongoose** con `npm install express mongoose`.
3. Configura Mongoose para conectar con MongoDB en `server.js`.

### Paso 4: Configuración Angular en el Cliente

1. Utiliza la carpeta `src/app` en `client` para tus componentes y módulos Angular.
2. Añade estilos globales en `src/styles.css`.

### Paso 5: Interactividad y Comunicación con el Servidor

1. Para realizar peticiones al servidor desde el cliente, considera usar **HttpClient** de Angular.
2. Usa HttpClient para comunicarte con el backend y realizar operaciones CRUD.

### Paso 6: Ejecución del Proyecto

1. **Iniciar el servidor backend**:
   - Navega a `backend` y ejecuta `node server.js`.
2. **Iniciar la aplicación Angular**:
   - En otra terminal, ve a `client` y ejecuta `ng serve`.

## Notas Adicionales

- Considera implementar autenticación con JWT o manejo de sesiones.
- No olvides seguir las mejores prácticas de seguridad para proteger tu aplicación.

## Autor

- Manuel Delgadillo
- Ignacio Garcia
- Christian Mendoza
- Cesar Vera

