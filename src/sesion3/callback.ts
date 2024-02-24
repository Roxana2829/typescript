/**
 *en el tipado de callbacks no podemos iniciar parametros 
 *  su vez solo es necesario indicarlos como opcionales "?"
 */
const myCallback = function (text: string, age?: number): void {
    console.log('myCallback is called with ' + text)
}

// el signo ? nos indica que es opcional un dato (age?)
function withCallbackArg(mssg:string, myCallback: (text: string, age?: number) => void): void {
    console.log('withCallbackArg called, message: ' + mssg)
    //
    myCallback(mssg + 'from withCallbackArg')
}

withCallbackArg('hola', myCallback)
