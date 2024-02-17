function mayorDeEdad(edad:number) {
   let message = 'es mayor de edad'

   if (edad > 17){
    message = 'es menor de edad'

   }
    // const message : string = edad > 17 ? 'es mayor de edad' : 'es menor de edad'
    console.log(message)
}

mayorDeEdad(10)
mayorDeEdad(18)

/**
 * hay que evitr bloques innecesarior, por ejemplo else
 * ya que al ser bloque por defecto podemos declarar codigo antes o despues
 * y al final de cuentas siempre se va a declarar.
 */