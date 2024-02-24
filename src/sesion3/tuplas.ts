let tuple1: [string, boolean]
tuple1 = ['test', true]

/**
 * ts nos ayuda a tipar arreglos y este 
 * solo podra aceptar los valores que emos indicado
 */
//tuple1 = [false, 'test']

/**let a: boolean = false
tuple1.forEach(value => {
    if (typeof value === 'boolean' ) {
        a = value
    }
})
*/

console.log(tuple1[0])
console.log(tuple1[1])

/**
 * la estructurcion nos ahorra lineas de codigo
 * evitando declarar en lines separadas cada variable
 * 
 */

let [a, b] = tuple1

console.log(a, b)


let complexObj ={
    aNum: 1,
    bString: 'test',
    cBool: true
}


/**
 * la destructuracion no obliga a que se declaren todas las vriables en cada propiedad
 * es decir podemos omitir valorews de un onjeto o arreglo
 */
let {aNum, bString, cBool} = complexObj

console.log(aNum, bString, cBool)