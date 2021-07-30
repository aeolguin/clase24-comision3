//Importo los modulos necesarios
const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const sequelize = require('./db/db.conexion')
const Productos = require('./db/db.modelo.productos')
const Usuarios = require('./db/db.modelo.usuarios')
const vistaProductos = require('./app/vista/vista.productos')
const vistaUsuarios = require('./app/vista/vista.usuarios')

//Middleware globales
app.use(express.json())
app.use(cors())

//Configuraciones globales
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


//Levantamos nuestro servidor
async function inicioServer() {
    try {
        await Productos.sync()
        await Usuarios.sync()
        await sequelize.authenticate()
        console.log('Conección estabilizada correctamente');
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en htt://${process.env.HOST}:${process.env.PORT}`);
        });
      } catch (error) {
        console.error('No se pudo conectar correctamebte con la Base de datos:', error);
      }
}

inicioServer();


//Usamos routes
vistaProductos(app)
vistaUsuarios(app)