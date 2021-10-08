# PROYECTO Módulo 1 Curso Backend Web

## Objetivo

El módulo 1 del curso de backend web consiste en utilizar un lenguaje de programación para crear el backend de una aplicación web.

En este caso, construirás una __API Rest__ funcional utilizando Node.js/Express. Esta API expondrá una serie de _end-points_ que podrán ser consumidos por la aplicación de _Front-end_.

## Requerimientos

La API debe dar respuesta a una aplicación front-end de reserva de vuelos online, que tiene las siguientes funcionalidades:

Escenario 1: **Usuario no logado**
    - Puede hacer consultas de rutas
    - Puede registrarse
    - Puede logarse

Escenario 2: **Usuario logado con el rol user**
    - Puede hacer consultas de rutas
    - Puede guardar las rutas en su perfil de usuario
    - Puede consultar sus propias rutas
    - Puede borrar sus propias rutas

Escenario 3: **Usuario logado con el rol admin**
    - Puede consultar los datos de todos los usuarios
    - Puede borrar los datos de un usuario

Con el ejercicio se facilita un directorio data con la siguiente información:
airlines, airports, cities, countries, routes.

Deberás añadir la colección **users.json** que tendrá la siguiente estructura:
```json
    [{
        "userId":1,
        "username":"name",
        "password":"1234",
        "rol":"user",
        "routes":[resultado de la búsqueda por rutas]
    }]
```
_El id puede será un número secuencial generado en el momento de registrar al usuario. No vendrá informado por el usuario._
_El rol se asigna automáticamente_
_El usuario administrador se escribe directamente en el fichero, no se dará de alta mediante endpoints_



### Consultas

| Entidad | Acción | Descripción |Parámetros|
|--------|--------|-------------|-----------|
|User | Register | El usuario se registra desde la aplicación cliente |username, password|
|User | Log in | El usuario se autentica desde la aplicación cliente | username, password|
|Airlines|list | El usuario lista todos los códigos de aerolíneas |no|
|Airports|list | El usuario lista todos los códigos de aeropuertos |no|
|Cities |list  | El usuario lista todos los códigos de ciudades |no|
|Countries|list| El usuario lista todos los códigos de países |no|
|Rutas | List | El usuario accede a una lista de rutas |origen, destino|
|RutasUsuario| Crea varias |Un usuario con el rol de usuario, autenticado, guarda un array de rutas en su perfil |array de rutas|
|RutasUsuario| List | Un usuario con el rol de usuario, autenticado, lee todas las rutas de su perfil |array de rutas|
|RutasUsuario| Remove |Un usuario con el rol de usuario, autenticado, borra todas sus rutas de su perfil| no|
|Admin | List | Un usuario con el rol de administrador, autenticado, lista todos los usuarios |no|
|Admin | Remove One | Un usuario con el rol de administrador, autenticado, elimina un usuario |idUsuario|


### Estrategia de desarrollo

Construirás una API que después deberá ser desplegada en el servidor __Heroku__.

El código de la aplicación debe mantener el patrón de diseño __MVC__ y se incluirá dentro de un directorio denominado __`api`__. La estructura de la aplicación deberá ser la siguiente:

            Proyecto
            |_client
                |_request.rest
            |_api
                |_model
                    |_model1.js
                    |_...
                |_controller
                    |_airport.js
                    |_...
                    |_user.js
                    |_ ...
                |_middleware
                    |_error-handler.js
                    |_auth.js
                    |_...
                |_Others Helper Modules
                |_app.js
                |_server.js
                |_data
                |_.env

_tip: aborda la construcción por rutas/métodos completas._

### Requisitos técnicos

1. Todas las rutas tendrán la subruta api. Ej.: "http://localhost:3000/api/airports"
2. En el fichero o ficheros `request.rest` incluye todas las peticiones a los endpoints de la api, **utilizando la url de producción**.
3. Los controladores deben estar separados del fichero de rutas. Los controladores implementarán las llamadas a los métodos del modelo de datos y devolverán la respuesta al cliente en formato `JSON`.
4. Existirá un fichero de rutas por cada entidad de la aplicación. Las rutas deben aparecer agrupadas y deberán ser las mínimas imprescindibles.
5. Dentro de los ficheros de rutas se incorporará la protección de las rutas con middlewares.
6. El fichero `app.js` será el __entry point__ de la API, contendrá todos los middlewares necesarios para desarrollar la petición: _parsing_ de la request, compresión, cors, etc., menos los de autenticación, que se referirán dentro de las rutas.
7. La autenticación se implementará por reconocimiento de __usuario__ y __password__, y devolución de un __bearer token__ en formato __JWT__.
Se incorporará dentro de la carpeta __middleware__.

## Requisitos de entrega

1. Haz un fork del repositorio del proyecto en tu usuario de __GitHub__.
2. Clona el repositorio y trabaja dentro de la carpeta api.
3. Genera un repositorio en Heroku conectado al repositorio de GitHub que contiene el código.
4. Una vez finalizado el ejercicio realiza un pull request que contenga la siguiente información:
   -  Subject: Nombre del o de los miembros del equipo en la cabecera.
   -  Mensaje: Dirección git del repositorio, url heroku de la API.

## Evaluación

|Criterio|Nota máxima|
|---|---|
|La aplicación está en producción sin errores|2pts|
|Se han desarrollado todos los endpoints|5pts|
|Se ha introducido el middleware de autenticación|1pt|
|Se ha introducido el middleware de tratamiento de errores|1pt|
|El código está limpio, no hay acoplamientos y se mantiene el principio de responsabilidad única|1pt|

## Steps

**npm init**

  * npm i express

  * npm i -D jest

  * npm dotenv

## Architecture

  |_ Controller
    |_ Model
    |_ Routes
    |_ app.js
    |_ server

## 