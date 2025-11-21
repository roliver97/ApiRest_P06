# 🎬 API de Series y Plataformas de Streaming

API REST desarrollada con Node.js, Express y MongoDB para gestionar series de televisión, sus plataformas y demás información relacionada.


## 🚀 Tecnologías utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- dotenv
- nodemon



## 📁 Estructura del proyecto
| src| |  | | |
|----|--|--|--|--|
||api||| |
|||controllers|| |
|||| platforms.js|shows.js|
|||models|| |
|||| platforms.js|shows.js|
|||routes|| |
|||shows.js|| |
||config||| |
|||db.js|| |
||data||| |
|||shows.js|| |
||middleware||| |
||utils||| |
|||seeds|| |
||||shows.seed.js|| |
**index.js**

## 🚀 Scripts disponibles

| Script | Comando | Descripción |
|--------|---------|------------|
| `start` | `node index.js` | Inicia la aplicación en **modo producción**. |
| `dev`   | `nodemon index.js` | Inicia la aplicación en **modo desarrollo** con reinicio automático al cambiar archivos. |
| `seed`  | `node ./src/utils/seeds/shows.seed.js` | Ejecuta el script para **popular la base de datos** con la lista de series por defecto. |

## 💻 Instalación inicial de dependencias

| Dependencia | Comando | Descripción |
|-------------|---------|------------|
| express     | `npm i express`  | Framework de Node.js para crear la API REST. |
| mongoose    | `npm i mongoose` | ODM para conectar y manejar MongoDB desde Node.js. |
| dotenv      | `npm i dotenv`   | Permite cargar variables de entorno desde un archivo `.env`. |

# 📡 ENDPOINTS

## 🎬 Series

 **GET / Read**

/api/v1/shows | Obtener todas las series  
/api/v1/shows/:name | Obtener las series por nombre  
/api/v1/shows/categories/:category | Obtener todas las series dentro de una misma categoría  

 **POST / Create**
 
 /api/v1/shows | Crear una nueva serie  

 **PUT / Update**
 
  /api/v1/shows/:id | Actualizar una serie a partir de su ObjectId  
 
 **DELETE**

 /api/v1/shows/:id | Eliminar una serie a partir de su ObjectId  
 
 
## ▶️Plataformas de streaming

 **GET / Read**
 
 /api/v1/platforms | Obtener todas las plataformas  
 
 **POST / Create**

/api/v1/platforms | Crear una nueva plataforma  

 **PUT / Update**
 
 /api/v1/platforms/:id | Actualizar una plataforma a partir de su ObjectId  
 
 **DELETE**

 /api/v1/platforms/:id | Eliminar una plataforma a partir de su ObjectId  


#  🧠 MODELS

**Series**
{
  title: String,
  imgUrl: String,
  categories: [String],
  seasons: Number,
  chapters: Number,
  isAdultContent: Boolean,
  platforms: [{ type: ObjectId, ref: "Platform" }] // Datos relacionados
}

**Plataformas**
{
  name: String,
  imgUrl: String,
}

---
**Rock The Code || Proyecto 06 - Api Rest**  
Proyecto desarrollado por _Roman Oliver Gil_.
