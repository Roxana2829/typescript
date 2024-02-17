/**
 * si utilizamos la palabra var en ambito sigue siendo el mismo (global)
 * con let el ambito solo es el del bloque en el que se declara
 */
var index: number = 0

if (index === 0) {
    var index: number = 2
    console.log(`index: ${index}` )

}

console.log(`index: ${index}`)


/**
 * si trabajamos con ts en crudo posiblemente consideramos con nombre de variables reservadar por ts
 * para evitar esto podemos agregar la siguiente configuracion
 * "moduleDetection": "force",
 * o agregamos export {} al inicio del archivo
 * o simplemente cambiando el nombre de la variable
 */

//let name = 'juan'