//Importo los modulos necesarios
const {DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db.conexion')

//Defino los modelos de DB que voy a utilizar

const Productos = sequelize.define('productos', {
    listado: {
        type: DataTypes.CHAR(50),
        allowNull: false
    },
    alta: {
        type: DataTypes.CHAR(50),
        allowNull: false
    },
    modificacion: {
        type: DataTypes.CHAR(50),
        allowNull: false
    },
    baja: {
        type: DataTypes.CHAR(50),
        allowNull: false
    }
})

module.exports = Productos