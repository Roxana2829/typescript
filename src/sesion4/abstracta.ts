abstract class EmployeeBase{
public id: number
name: string

//los metodos abstractos no se implementn
abstract doWork(text: string): string

    constructor() {
        this.id = 0
        this.name = 'juan'
    }
}

class OfficeWorker extends EmployeeBase{
    //podemos sobre escribir los metodos
    doWork(): string {
        return ''
    }
}
class OfficeManager extends OfficeWorker {
    public employees: OfficeWorker[] = []

    /**
     * no podemos cambiar el tipo de retorno 
     */
    //doWork(): number {
       // return 1
    //}
}

let employee = new OfficeWorker()

employee.id