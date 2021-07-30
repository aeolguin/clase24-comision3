//Importamos los modulos que vamos a utilizar
const midd = require('../../middlewares/midd.usuarios')
const servicesUsuarios = require('../controlador/constrolador.usuarios')
const cors = require('cors')

//Exportar los modulos para ser usados.
module.exports = async (app)=>{
    app.post('/login', async (req,res)=>{
        let usuario = req.body
        console.log(usuario)
        try {
            let resultado = await servicesUsuarios.chequearUsrValido(usuario)
            if (resultado) {
                let validacion = await servicesUsuarios.generaToken(usuario)
                res.json(validacion)
            }
        }catch (err){
            console.log(err)
            res.status(400).send('Usuario no registrado')
        }
    })

    app.get('/usuarios' ,midd.usuarioValido, async (req,res)=>{
        try {
            let resultado = await servicesUsuarios.listarUsuarios()
            res.status(200).json(resultado)
        }catch(error) {
            console.log(error)
            res.status(400).send('algo raro paso')
        }
    })
}