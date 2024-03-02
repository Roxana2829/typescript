class SimpleClass {
    id: number | undefined
    print(){
        let id = 10
        console.log('simpleClass.id =' + this.id)
        console.log(id)
    }
}

let simpleClass = new SimpleClass();
let simpleClass2 = new SimpleClass();

simpleClass.print()

simpleClass2.id = 2024

simpleClass2.print()