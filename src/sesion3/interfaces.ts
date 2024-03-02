interface IdNme {
    id: number;
    name: string;
    print: (text: string, age: number) => void
}

let idObj: IdNme = {
    id: 1,
    name:'Carlos',
    print: (text, age) => console.log(text, age)
}

idObj.print('hola', 2)


interface Optional {
    id: number,
    name: string,
}

//let optional: Optional ={
 //   id: 2
//}

interface WeakTyep {
    id?: number;
    name?: string;
}
//let weak: WeakTyep = {desc: 'rer'}
