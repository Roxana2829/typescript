let firstObjt: object = { id: 1, name: 'first'}
let secondObj: object = {...firstObjt}

let objName: object = {name: 'rox' }
let objId: object = {id: 2}
let obj3 = {desc: 'test ljkdshflkj'}




/**  la propagacion de objetos nos sirbe para
evitar la asignacion devalores explicitamente
*/
obj3 = {desc: obj3.desc , ...objId}

console.log(obj3)

//let arreglo1 = [1,2,3]
//let arreglo2 = [1,2,3]
