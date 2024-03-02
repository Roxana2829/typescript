class StaticClass {
    id = 10
    static count = 0
    static print() {
        console.log(2)
        /**
         * no podemos llamar propiedades o metodos relaciondos con la insrancia
         * dentro de los merodos estaticos
        
        */
    }

    updateCount() {
        return StaticClass.count++
    }
}

let staticClass = new StaticClass()
let staticClass2 = new StaticClass()

/**
 * los metodos estaticos no se pueden llamar en instancias
 */
//staticClass.print()

StaticClass.print()
