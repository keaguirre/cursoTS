function UpperCase(target: any, methodName: string, PropertyDescriptor: PropertyDescriptor){
    const original = PropertyDescriptor.get;
    PropertyDescriptor.get = function(){
        const r = original?.call(this);
        if(typeof r === 'string'){
            return r.toUpperCase();
        }
        return r;
    }
}

class User {
    constructor(public name:string, public lastname:string){}
    @UpperCase
    get fullName(){
        return `${this.name} ${this.lastname}`;
    }
}

const usr = new User('Juan', 'Perez');
console.log(usr.fullName); // JUAN PEREZ