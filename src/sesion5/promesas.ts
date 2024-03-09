interface Usuario {
    id: number;
    nombre: string;
}

const usuarios: Usuario[] =[
{
    id: 1,
    nombre: 'rox'
},

{
    id: 2,
    nombre: 'ana'
},
{
    id: 3,
    nombre: 'ara'
}
]
const buscarPersonal = (id: number) => {
    /**
     * RESOLVE si el resultado es el esperado
     * REJECT si sucede algun error o algo no esperado.
     */
    return new Promise<Usuario>((resolver, reject) => {
        const usuario = usuarios.find(u => u.id === id)
        //if (usuario) {
            //resolver(usuario)
        //} else {
          //  reject('el id ' + id+ 'no existe')
       // }
       usuario ? resolver(usuario) : reject('el id ' + id + 'no existe')
    })
}

buscarPersonal(3)
.then(usuario => {

    console.table(usuario)
    return usuario.nombre
})
.then(nombre => console.log(nombre))
.catch(error => console.log(error))

//.then(usuario => console.table(usuario))
//.catch(error => console.log(error))
