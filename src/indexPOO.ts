class Personaje {
    profesion?: string;
    private static equipo: number = 1;
    constructor(
        public readonly id: number,
        public name:string,
        public nivel:number,
        private _hp:number
    ) {}
    subirNivel(): number {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }

    static agregarPersonaje(): void {
        Personaje.equipo++
    }

    cambiarHP(cantidad: number): number {
        this._hp = this._hp + cantidad;
        // no pasarse del maximo
        return this._hp;
    }

    // getHp(): number {
    //     return this._hp;
    // }
    get hp(): number {
        return this._hp;
    }

    get equipo(): number {
        return Personaje.equipo;
    }

    // static getEquipo(): number {
    //     return Personaje.equipo;
    // }

    // set addHp(cantidad: number) {
    //         this._hp = this._hp + cantidad;
    // }
}

const personaje = new Personaje(1, 'kevin', 1, 100);
personaje.cambiarHP(-10);
console.log(personaje);
console.log(personaje.hp);
const personaje1 = new Personaje(2, 'kevin', 1, 120);




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