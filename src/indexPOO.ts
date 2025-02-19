class Personaje {
    profesion?: string;
    constructor(
        public readonly id: number,
        public name:string,
        public nivel:number,
        private _hp:number) {
    }
    subirNivel(): number {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }
    cambiarHP(cantidad: number): number {
        this._hp = this._hp + cantidad;
        // no pasarse del maximo
        return this._hp;
    }
}

const personaje = new Personaje(1, 'kevin', 1, 100);
personaje.cambiarHP(-10);
console.log(personaje);


if (personaje instanceof Personaje) {
    console.log('Es un personaje o no, retorna boolean');
}

//tenemos dos opciones de definicion de clases
/*
class Personaje {
    readonly id: number;
    name: string;
    nivel: number;
    private hp: number;
    profesion?: string;
    constructor(id: number, name:string, nivel:number, hp:number) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this.hp = hp;
    }
}
    o
class Personaje {
    constructor(
        public readonly id: number,
        public name:string,
        public nivel:number,
        private hp:number) {
    }
}
*/