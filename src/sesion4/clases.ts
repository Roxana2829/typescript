class SimpleClass {
    private id: number
    readonly name:string

    constructor(name: string){
        this.id = 1
        this.name =name
    }
// public no es necesario señalarlo ya que esta por defecto
    print(){
        console.log('simpleClass.id= ' + this.id)
    }
/**
 * 
 * @param name las propiedades tipo readonly solo se pueden 
 * asignar valores dentro del constructor
 
    setName(name: string) {
        this.name = name
    }
 */   
}
/**
 * 
 
let simpleClass = new SimpleClass('juan')

simpleClass.print




    id: number | undefined
    print(){
        let id = 10
        console.log('simpleClass.id =' + this.id)
        console.log()
    }
}

let simpleClass = new SimpleClass();
let simpleClass2 = new SimpleClass();

simpleClass.print()

simpleClass2.id = 2024

simpleClass2.print()
*/