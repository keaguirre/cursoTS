function Min(min:number){
    return(target:any, propertyName:string)=>{//antes ocupabamos methodName, pero ahora es propertyName porque estamos decorando una propiedad
        let val:string;
        const descriptor: PropertyDescriptor = {
            get(){
                return val;
            },
            set(v:string){
                if (v.length < min){
                    throw new Error(`La propriedad ${propertyName} debe tener al menos ${min} caracteres`);
                }
                val = v
            }
        }
        Object.defineProperty(target, propertyName, descriptor);// 
    }
}
class User {
    @Min(6)
    public password: string;
    constructor(public name:string, public lastname:string, password:string){
        this.password = password;
    }
    @UpperCase
    get fullName(){
        return `${this.name} ${this.lastname}`;
    }
}

const usr = new User('Juan', 'Perez', '123456');
console.log(usr.fullName); // JUAN PEREZ

export {}