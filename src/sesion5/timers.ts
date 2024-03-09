const miHolaMundo = (paso: number) => {
    console.log('hola mundo: ' + paso)
}

setTimeout(miHolaMundo, 3000, 3)
setTimeout(miHolaMundo, 2000, 2)
setTimeout(() => {
    console.log('Hola mundo: ' + 4)
}, 4000)


let buscarUsuario = (
    id: number,
    funcion: (usuario: {id: number, nombre: string}) => void
) => {
    let usuario = {
        id,
        nombre: 'rox'
    }

    setTimeout(() => {
        funcion(usuario)
    }, 1000);
}

buscarUsuario(20, (usuario) => console.log(usuario))

function imprimirUsuario(usuario: {id: number, nombre: string}) {
    console.log(usuario.id)
    console.log(usuario.nombre)
}

buscarUsuario(30, imprimirUsuario)

miHolaMundo(1)