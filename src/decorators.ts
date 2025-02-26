//para habilitar los decoradores en tsconfig.json "experimentalDecorators": true
function Route (ruta: string) {
    return(constructor: Function) =>{
        console.log('Ejecutando el decorador de ruta');
        constructor.prototype.route = ruta 
    }       
}
//los decoradores de metodos nos permiten modificar el metodo antes de que sea ejecutado y siempre esperan 3 parametros: el target:any, el nombre del metodo:string y el descriptor:PropertyDescriptor
function Method(method:string){ 
    return (target: any, methodName:string, descriptor: PropertyDescriptor) => {//usualmente el target no se utiliza cuando se trabaja con metodos decoradores de propiedades
        console.log(methodName, descriptor)
        const original = descriptor.value;
        descriptor.value = function(...args:any){ //esto hace que el metodo original sea reemplazado por una funcion que recibe cualquier cantidad de argumentos y cualquier tipo de argumentos
            console.log('antes del metodo decorado');
            original(this, ...args);//esto ejecuta el metodo original con el contexto de la instancia de la clase y los argumentos que recibe la funcion decorada
            // asi mediante el descriptor podemos modificar el metodo antes de que sea ejecutado, pasarle parametros a la ejecucion del original y modificar el resultado de la ejecucion
            // y ejecutar codigo despues de la ejecucion del metodo original
            console.log('despues del decorador')
        }
    }
}
//los decoradores de clase nos permiten modificar la clase antes de que sea instanciada agregando propiedades o metodos al prototipo de la clase
@Route('/productos')
class Productos {
    @Method('GET')
    find(val:string){
        console.log('metodo find'+val);
    }
}

const k = new Productos();
// console.log(k.route); // /productos
k.find('hola'); // metodo decorado