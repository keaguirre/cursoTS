//Interfaces para las clases y los types para lo demas
interface Animal { //se parece a un type pero se usa para definir una estructura de una clase
    name: string;
    caminar(): void;
    onomatopeya(): string;
}

class Caballo implements Animal { //en lugar de usar extends se usa implements
    name: string = 'Caballo';
    caminar(): void {
        console.log('caminando');
    }
    onomatopeya(): string {
        return 'hin';
    }
}

class Cerdo implements Animal {
    name: string = 'Cerdo';
    caminar(): void {
        console.log('caminando');
    }
    onomatopeya(): string {
        return 'Oink';
    }
}

class Perro implements Animal {
    name: string = 'Perro';
    caminar(): void {
        console.log('Perro caminando');
    }
    onomatopeya(): string {
        return 'guau';
    }
}

//Index signature para definir un objeto con propiedades dinamicas
class DiccionarioUsuarios{
    [id:string]: string;
}

let diccionarioUsuarios = new DiccionarioUsuarios();
diccionarioUsuarios['1a'] = 'usuario1';
diccionarioUsuarios['a1'] = 'usuario2';