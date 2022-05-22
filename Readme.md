# KlasseG APP
Una app para organizar todos tus enlaces a videoconferencias escolares
<hr>
KlasseG es una WebApp que prioriza la interacción con el usuario y su facilidad de uso

<hr>

## Codificado con:

### Vista
- Html 5 / CSS 3 / Javascript ECM6
### Modelo
- NodeJS
    - Express
        - Session
        - Handlebars
    - Method Override
    - Mongoose
    - Passport
    - Bcrypt
    - Connect Flash
    - Nodemon (Se recomienda instalar con el comando npm i -G nodemon)
### Controlador
- MongoDB

## Usarse en una versión local:

### Requerimientos:
- Node Instalado en el ordenador
- MongoDB instalado en el ordenador de pruebas y en el servidor
- 

### ¿Cómo arrancar el proyecto?

1. Abra una terminal en la carpeta KlasseG 
2. Ejecute el comando:

        node src/index

3. Si tiene instalado nodemon de forma general (Es decir ejecutó el comando "npm i -G nodemon") escriba el comando:

        nodemon src/index

4. Ingresar a la web [http://localhost:3000/](http://localhost:3000/)

5. iniciar el servidor de MongoDB con el comando:

        mongod

## Paso de desarollo actual

- Configuración del servidor Listo
- Conexión con la base de datos Listo
- Configuración de las vistas de HTML dentro de las rutas del servidor
