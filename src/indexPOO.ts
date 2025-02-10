class Personaje {
    id: number;
    name: string;
    nivel: number;
    hp: number;
    constructor(id: number, name:string, nivel:number, hp:number) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this.hp = hp;
    }
    subirNivel(): number {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }
    cambiarHP(cantidad: number): number {
        this.hp = this.hp + cantidad;
        return this.hp;
    }
}

const personaje = new Personaje(1, 'kevin', 1, 100);
personaje.cambiarHP(-10);
console.log(personaje);
if (personaje instanceof Personaje) {
    console.log('Es un personaje o no, retorna boolean');
}
