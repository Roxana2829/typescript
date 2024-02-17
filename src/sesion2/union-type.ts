/**
 * los types nos sirven para no repetir uniones
 * o tener el mismo tipo de unionen una sola declaracion
 * y facilitar el mantenimiento del codigo
 */
type StringOrNumber = string | number

function print(value: StringOrNumber, value2: StringOrNumber): StringOrNumber {
    if(typeof value === 'string') {
        console.log (value + value2)
    }

    if(typeof value === 'number' && typeof value2 === 'number') {
        console.log(value + value2)
    }
    return value
}

print('texto1', 2)
