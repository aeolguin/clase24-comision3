const sequelize = require('sequelize')
const Productos = require('../../db/db.modelo.productos')

//Exportar nuestros modulos a utilizar
module.exports.traerProductos = async (tipo)=> {
    let resultado =  await Productos.findAll({
        attributes: [tipo]
    })
    console.log(resultado[0][tipo])
    return resultado[0][tipo]
}