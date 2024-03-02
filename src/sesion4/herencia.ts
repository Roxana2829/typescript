interface Base {
    id: number | string;
}

/**
 * podemos disminuir el tipado mas no ampliarlo
 */
interface Base2 extends Base {
    id: number;
}

/**
 * se puede estender mas de una interfaz
 * y no es necesario declarar las propiedades heredadas
 */
interface Derivada extends Base {
    name: string;
}

class NameClass { //implements Derivada 
    //solo acceden la clase padre y las derivadas
     protected id: number;
    name: string;

    constructor(name: string){
        this.id = 0
        this.name =name
    }

    printName(){
        console.log(this.name)
    }
}

class ClassC implements Base2 {
    id = 0;
    ids =0
}


class AgeClass extends NameClass {
    age: number = 0
    ids = 0

    constructor(name: string, age: number){
        super(name)
        this.age = age
    }

    printName() {
        console.log(this.id)
    }
}

let person: AgeClass = new AgeClass('Ana', 25) //{id: 10, name: 'ana', age: 24}

person.printName()
