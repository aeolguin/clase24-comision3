//Importamos los modulos requeridos
const Usuarios = require('../../db/db.modelo.usuarios')


//Exportamos los modulos

module.exports.existenciaDeUsuario = async (usr)=>{
    let usuario = [usr.usuario , usr.pass]
    try {
        let resultado = await Usuarios.findOne({where: {usuario: `${usuario[0]}`}})
        console.log(resultado)
        //let resultado = await sequelize.query(`SELECT * FROM dbo.usuarios WHERE usuarios.usuario = '${usuario[0]}'`);
        if (resultado != null) {
            //let chequeado = await sequelize.query(`SELECT * FROM usuarios WHERE usuarios.pass = '${usuario[1]}'`);
            let chequeado = await Usuarios.findOne({where: {pass: `${usuario[1]}`}})
            if (chequeado != null) {
                return true
            }else {
                return false
            }
        }else {
            return false
        }
    }catch (err) {
        console.log(err)
        throw new Error (err)
    }
}

module.exports.listarUsuarios = async ()=> {
    try {
        let resultado = await Usuarios.findAll()
        console.log(resultado)
        //let result = await resultado[0].json()
        return resultado[0]
    }catch (error){
        console.log(error)
        throw new Error (error)
    }
}