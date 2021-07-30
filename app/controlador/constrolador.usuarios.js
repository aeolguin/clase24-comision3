//Importamos los modulos necesarios
const jwt = require('jsonwebtoken')
const { restart } = require('nodemon')
const modeloUsuarios = require('../modelo/modelo.usuarios')


//Exportamos nuestros modulos.
module.exports.generaToken = async (data)=> {
    const resultado = jwt.sign({
        data} , process.env.SECRET_KEY 
    ) //Tiempo maximo 15 minutos de validez
    return resultado
}

module.exports.verificacionUsuario = async (token)=> {
    const resultado = jwt.verify(token, process.env.SECRET_KEY)

    if(resultado){
        return resultado
    }else {
        throw new Error ('Token no valido!')
    }
}

module.exports.chequearUsrValido = async (usr)=>{
    try {
        let resultado = await modeloUsuarios.existenciaDeUsuario (usr)
        console.log(resultado)
        if (resultado) {
            return resultado
        }else {
            throw new Error ('No existe el Usuario')
        }
    }catch (err) {
        console.log(err)
        throw new Error (err)
    }
}

module.exports.listarUsuarios = async ()=> {
    try {
        let result = await modeloUsuarios.listarUsuarios()
        return result
    }catch (error) {
        console.log(error)
        throw new Error (error)
    }
}