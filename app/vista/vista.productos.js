//Importamos los modulos que vamos a utilizar
const controladorProductos = require('../controlador/controlador.productos')


//Exportar los modulos para ser usados.
module.exports = async (app)=> {
    app.get('/producto/:tipo' , async (req,res)=> {
        try{
            let resultado = await controladorProductos.muestraProductos(req.params.tipo)
            res.json(resultado)
        }catch (error) {
            console.log(error)
            res.status(500).jeson('Algo raro ocurrio con esta pagina')
        }
    })

    app.get('/productos/:tipo', async (req,res)=> {
        try{
            let resultado = await controladorProductos.muestraProductos(req.params.tipo)
            res.render("index", {result: resultado, result1: 'pirulo'})
        }catch (error) {
            console.log(error)
            res.status(500).jeson('Algo raro ocurrio con esta pagina')
        } 
    })
}