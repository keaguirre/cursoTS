function log<T, V>(a:T, b:V): V{
    return b;
}

log<string, number>('Dato: ', 10);
log<string, string>('Dato: ', 'hola');
log(1,'2');//se infiere el tipo de dato
log('1','2');//se infiere el tipo de dato

async function fetchData<T>(recurso: string):Promise<T>{
    const respuesta = await fetch(`${recurso}`);
    return respuesta.json();
}

type User = {
    id: string;
    name: string;
}

async function main(){
    const user = await fetchData<User>('/usuarios');   
}

type Computador = {
    encender: () => void,
    apagar: () => void;
}

class Programador<T> {
    computador: T;
    constructor(t: T){
        this.computador = t;
    }  
}

const programador = new Programador<Computador>({encender: () => {}, apagar: () => {}}); //metodos literales son una forma de definir un objeto con propiedades y metodos especificos sin necesidad de definir una interfaz
const programador1 = new Programador<string>('Hola'); // se define String como tipo de dato de T en la clase Programador, por ende hereda las propiedades de un string

programador.computador.encender();
programador.computador.apagar();

interface KeyValue<T, U> {
    key: T;
    value: U;
}
interface Product{
    id: string;
}

function fetchProduct(): KeyValue<string, Product>{
    return {
        key: 'producto',
        value: {id: '1'}
    }
}

function fetchStock(): KeyValue<string, number>{
    return {
        key: 'id de producto',
        value: 500
    }
}

// interface Usuario {
//     id: string;
//     name: string;
// }

class Usuario{
    constructor(public id: string, public name: string){}
}

//constraints = restricciones
function print<T extends Usuario>(t:T): T{ //se puede limitar el tipo de dato que se puede pasar al generico ya sea con una interfaz, una clase, un tipo de dato primitivo o un tipo de dato literal
    console.log(t);
    return t;
}
print({id: '1', name: 'usuario'});

class Estado<T>{
    protected data: T[] = [];
    agregar(t:T): void{
        this.data.push(t);
    }
    getEstado(): T[]{
        return this.data;
    }
}

const estadoUsuarios = new Estado<Usuario>;
type ObjectId = {
    id:string;
}
//pasar generico | pasar generico con restricciones(usando una interfaz o una clase)
class EstadoEliminar<T extends ObjectId> extends Estado <T>{ //se debe definir T en la clase que extiende de otra clase generica para poder usarlo | se puede usar una interfaz para definir el tipo de dato que se puede pasar al generico con restricciones
    eliminar(id:string){
        this.data = this.data.filter(x => x.id !== id);
    }
}
const estadoEliminar = new EstadoEliminar<Usuario>;

//pasar generico fijo
class EstadoUsuarios extends Estado<Usuario>{
    reiniciarContrasenas(){
        //logica
    }
}

type Calendar = {
    id: string,
    fuente: string,
    dueno: string
}
const calendar = { id: '1', fuente: 'google', dueno: 'yo'};
function getProp<T>(objeto: T, property:keyof T): unknown{ //keyof T es una forma de definir las propiedades de un objeto que ya se conoce y que se pueden pasar como argumento y restringir el tipo de dato que se puede pasar
    return objeto[property];
}

//utility types
type Punto = {
    x: number,
    y: number,
    desc?: string,
}

type PuntoOpcional = Partial<Punto>; //se puede usar para definir un objeto con propiedades opcionales
type PuntoRequerido = Required<Punto>;//se puede usar para definir un objeto con propiedades requeridas
type PuntoSoloLectura = Readonly<Punto>;//se puede usar para definir un objeto con propiedades solo lectura

const keyVal: Record<string, number> = {
    '1': 1,
    '2': 2,
    '3': 3
}

type kv = { [key: string]: number} //se puede usar para definir un objeto con propiedades dinamicas
const p: Omit<Punto, 'desc' | 'y' > = {x: 1};//se puede usar para omitir una propiedad de un objeto
const p1: Pick<Punto, 'x' | 'y'> = {x: 1, y: 2};//se puede usar para seleccionar propiedades de un objeto
const p2: Exclude<keyof Punto, 'desc'> = 'x';//se puede usar para excluir una propiedad de un objeto
const p3: Extract<keyof Punto, 'desc'> = 'desc';//se puede usar para extraer una propiedad de un objeto
const p4: NonNullable<string | null | undefined> = 'hola';//se puede usar para definir un tipo de dato que no puede ser null o undefined
const p5: ReturnType<() => string> = 'hola';//se puede usar para definir el tipo de retorno de una funcion
const p6: InstanceType<typeof Usuario> = new Usuario('1', 'usuario');//se puede usar para definir el tipo de dato de una instancia de una clase
const p7: ThisType<Punto> = {x: 1, y: 2};//se puede usar para definir el tipo de dato de una instancia de una clase
const p8: Parameters<(x: number) => void> = [1];//se puede usar para definir el tipo de dato de los parametros de una funcion
const p9: ConstructorParameters<typeof Usuario> = ['1', 'usuario'];//se puede usar para definir el tipo de dato de los parametros de una funcion constructora
const p10: ThisParameterType<(x: number) => void> = 1;//se puede usar para definir el tipo de dato de los parametros de una funcion
const p11: OmitThisParameter<(x: number) => void> = () => {};//se puede usar para omitir el parametro this de una funcion