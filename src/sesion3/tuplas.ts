let tuple1: [string, boolean]
tuple1 = ['test', true]

/**
 * ts nos ayuda a tipar arreglos y este 
 * solo podra aceptar los valores que emos indicado
 */
//tuple1 = [false, 'test']

let a: boolean = false
tuple1.forEach(value => {
    if (typeof value === 'boolean' ) {
        a = value
    }
})

console.log(tuple1)