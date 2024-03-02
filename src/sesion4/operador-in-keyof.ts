interface IdName {
    id: number;
    name: string;
    }
    
    interface DescrValue {
        descr: string;
        value: number;
    }

    function pirntNameOrValue(obj: IdName | DescrValue) {
        if ('id' in obj) {
            console.log(obj.name)
        }
        
              
        if ('descr' in obj) {
            console.log(obj.value)
        }
    }

    type personPropertyName = keyof IdName
    function getProperty(key:personPropertyName, value: IdName) {
        console.log(key, value[key])
    }

    getProperty('id', {id: 3, name: 'ara'})