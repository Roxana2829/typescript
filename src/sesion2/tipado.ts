//tipado de objetos
function printCoord(pt:{x: number, y: number}){
    console.log('el valor de la coordenada x es: ' + pt.x)
    console.log('el valor de la coordenada y es: ' + pt.y)
}

printCoord({x: 2, y: 10})