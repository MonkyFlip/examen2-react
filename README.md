# examen2-react

## Descripción
Esta aplicación es un proyecto desarrollado como parte del examen de desarrollo móvil. Está creada con **React** y tiene funcionalidad para un inicio de sesión con validación de credenciales y una página que muestra registros en una tabla.

## Funcionalidades
1. **Inicio de Sesión**:
   - Valida las credenciales de usuario enviadas a la API para autenticar el acceso.
   - Si las credenciales son válidas, redirige a la pantalla de registros.
2. **Visualización de Registros**:
   - Muestra los usuarios registrados en una tabla, recuperando los datos desde la API.
3. **Componentización Reutilizable**:
   - Botón personalizado que es reutilizable en distintas pantallas.
   - Tabla de usuarios con encabezados para mayor claridad.

## Estructura del Proyecto
examen2-react/
├── src/
│   ├── components/
│   │   ├── Button.tsx         # Botón reutilizable
│   │   ├── UsersTable.tsx     # Tabla para mostrar registros
│   ├── pages/
│   │   ├── Login.tsx          # Página de inicio de sesión
│   │   ├── Records.tsx        # Página para visualizar registros
│   ├── App.tsx                # Componente principal que orquesta las páginas
├── public/
├── package.json
├── README.md

## Instalación
Sigue estos pasos para ejecutar la aplicación en tu entorno local:

1. Clona el repositorio:
   git clone <url-del-repositorio>

2. Instala las dependencias necesarias:
   npm install

3. Inicia la aplicación:
   npm start
   

## Configuración de la API
El proyecto utiliza los siguientes endpoints para comunicarse con la API:

### **Login**
- **Endpoint**: `POST https://3.12.241.112/login`
- **Parámetros**:
  json
  {
      "correo": "user@example.com",
      "password": "123456"
  }
- **Respuestas**:
  - Éxito: `{ "message": "Login exitoso" }`
  - Error: `{ "message": "Credenciales inválidas" }`

### **Usuarios**
- **Endpoint**: `GET https://3.12.241.112/users`
- **Encabezados**:
 json
  {
      "Authorization": "Bearer <token>"
  }
- **Respuesta Exitosa**:
json
  [
      { "id": 1, "nombre": "Usuario Uno", "correo": "usuario1@example.com" },
      { "id": 2, "nombre": "Usuario Dos", "correo": "usuario2@example.com" }
  ]


## Componentes Principales
1. **Button.tsx**:
   Un botón reutilizable con estilos personalizados.

2. **UsersTable.tsx**:
   Tabla para mostrar la lista de usuarios con encabezados organizados.

3. **Login.tsx**:
   Página de inicio de sesión que valida las credenciales ingresadas.

4. **Records.tsx**:
   Página que muestra los usuarios registrados en la API.

## Dependencias Utilizadas
- **React**: Librería principal para crear componentes.
- **React Router**: Para la navegación entre páginas.
- **Fetch API**: Para realizar solicitudes HTTP a la API.

## Créditos
Desarrollado como parte de un proyecto académico para la materia **Desarrollo Móvil Multiplataforma**.
