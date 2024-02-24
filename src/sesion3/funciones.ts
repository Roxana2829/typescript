//ts no permite parametros opcionales y por defecto al mismo tiempo
//EJEMPLO: b?: number = 3 
const myFunction = (a: number,  b: number =3): number => {
    return a + b
}

console.log(myFunction(2))
