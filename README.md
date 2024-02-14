# Movie Review Project

Este proyecto de Movie Review es una aplicación web que permite a los usuarios ver detalles de películas, agregar revisiones y ver las revisiones existentes para cada película. 
Está construido utilizando React para el frontend y Express para el backend. La comunicación entre el frontend y el backend se realiza mediante solicitudes HTTP.

## Estructura del Proyecto

El proyecto sigue una estructura de cliente-servidor, con el código del cliente en la carpeta `frontend` y el código del servidor en la carpeta `backend`.

- **frontend**: Contiene el código del frontend construido con React y Bootstrap.
- **backend**: Contiene el código del backend construido con Express y MongoDB para la base de datos.

## Instalación y Configuración

### Backend (Servidor)

1. Abre una terminal y navega a la carpeta del servidor:

   ```bash
   cd backend
   ```

2. Instala las dependencias del servidor:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la carpeta `backend` y configura las variables de entorno, incluyendo la conexión a la base de datos MongoDB.

   ```env
   PORT=5000
   MONGODB_URI=tu_uri_de_mongodb
   ```

4. Inicia el servidor:

   ```bash
   nodemon
   ```

   El servidor debería estar corriendo en `http://localhost:5000`.

### Frontend (Cliente)

1. Abre otra terminal y navega a la carpeta del cliente:

   ```bash
   cd frontend
   ```

2. Instala las dependencias del cliente:

   ```bash
   npm install
   ```

3. Inicia la aplicación frontend:

   ```bash
   npm run start
   ```

   La aplicación estará disponible en `http://localhost:3000`.

## Uso de la Aplicación

1. Accede a la aplicación en tu navegador en `http://localhost:3000`.

2. Explora las películas, revisa los detalles y agrega tus revisiones.

3. ¡Disfruta explorando y revisando películas!

## Estructura del Código

- **/controllers**: Contiene controladores para gestionar las solicitudes HTTP.
- **/dao**: Contiene objetos de acceso a datos para interactuar con la base de datos.
- **/routes**: Define las rutas de la aplicación.
- **/src/components**: Contiene componentes React para la interfaz de usuario.
- **/src/services**: Contiene servicios para realizar solicitudes HTTP al backend.

## Tecnologías Utilizadas

- **Frontend**: React, Bootstrap
- **Backend**: Express, MongoDB
- **Gestión de Estado**: useState, useEffect (React Hooks)
- **Enrutamiento**: react-router-dom
- **Estilos**: Bootstrap y estilos personalizados
- **Fecha y Hora**: moment.js

Este proyecto sirve como una base para construir una aplicación de revisión de películas y puede ser extendido y mejorado según las necesidades específicas. ¡Diviértete explorando y revisando películas!
