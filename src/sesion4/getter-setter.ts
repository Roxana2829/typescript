class ClassWithAccesors {
    private _id: number = 10


    get id() : number {
        return this._id 
    }

    
    set id(_id : number) {
        this._id = _id;
    }
}

let classWithAccesors = new ClassWithAccesors()

classWithAccesors.id = 20

console.log(classWithAccesors)