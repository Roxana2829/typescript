interface Print {
    print: () => void
}

class ClassA  implements Print{
    print(){
        console.log('classA')
    }
}

class ClassB implements Print {
    print(){
        console.log('classB')
    }
}

function printclass(obj: Print) {
    obj.print()
}

let myClass = new ClassA()
printclass(myClass)
printclass(new ClassB())