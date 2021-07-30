
console.log('Hola mundo desde el servidor pero lo enviamos al front')
const botonAlta = document.getElementById('alta')

botonAlta.addEventListener('click', async ()=> {
    let resultado = await traedatos()
    
    console.log(resultado)
})

async function traedatos () {
    let resultado = await getTipo('alta')
    return resultado
}
async function getTipo (data) {
    let resultado = await fetch(`http://localhost:3000/producto/${data}`)
    let result = await resultado.json()
    
    return result
}

//Corresponde a la clase 24-
//Declarar mis variables Globales
let botonLogin = document.getElementById('login')
let botonUsuarios = document.getElementById('usuarios')
//Declarar una clase para trabajar
class Usuario {
    constructor (usuario, pass) {
        this.usuario = usuario
        this.pass = pass
        this.token = ''
    }

    static async guardaUsuario (usuario) {
        localStorage.setItem('datosUsuarios', JSON.stringify(usuario))
    }

    static async recuperaUsuario () {
        let resultado = await JSON.parse(localStorage.getItem('datosUsuarios'))
        return resultado
    }
}

//Instaciamos nuestra calse
Usuario.guardaUsuario(new Usuario ('aolguin','Martina2712'))

//Logica para trabajar
//Login
botonLogin.addEventListener('click', async ()=> {
    let data = await Usuario.recuperaUsuario()

    let resultado = await fetch('http://localhost:3000/login', {
        method: 'post',
        headers: {
            "Accept": "application/json, text/plain, */*",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "usuario": data.usuario,
            "pass" : data.pass
        })
    })

    let datosVuelta = await resultado.json()
    data.token = datosVuelta
    console.log(data)
    Usuario.guardaUsuario(data)
})

botonUsuarios.addEventListener('click', async ()=> {
    let data = await Usuario.recuperaUsuario()

    let resultado = await fetch("http://localhost:3000/usuarios", {
        method: 'get',
        headers: {
            "Accept": "application/json, text/plain, */*",
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.token}`
        },
    })

    let datosVuelta = await resultado.json()
    console.log(datosVuelta)

})