//Importar los metodos que voy a utilizar
const modeloProductos = require('../modelo/modelo.productos')

//exportar los modulos que vamos a utilizar
module.exports.muestraProductos = async (tipo)=> {
    try {
        const resultado = await modeloProductos.traerProductos(tipo)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Desde el controlador paso algo')
    }
}