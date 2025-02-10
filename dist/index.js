"use strict";
let extincionDinosaurios = 76000000;
let disnoaurioFavorito = 'T-rex';
let extintos = 1;
function chanchitoFeliz(config) {
    return config;
}
let animales = ['chanchito', 'feliz', 'pollo'];
let nums = [1, 2, 3];
let numsAny = [];
let checks = [];
let nums2 = [];
let tupla = [1, ['chanchitoFeliz', 'chanchitoPollo']];
tupla.push(22);
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extragrande = 'xl';
var Tallas;
(function (Tallas) {
    Tallas["Chica"] = "s";
    Tallas["Mediana"] = "m";
    Tallas["Grande"] = "l";
    Tallas["Extragrande"] = "xl";
})(Tallas || (Tallas = {}));
const variable1 = Tallas.Chica;
const estado = 2;
const objeto = { id: 1, nombre: '', talla: Tallas.Chica };
const objeto2 = {
    id: 1,
    nombre: '',
    talla: Tallas.Chica,
    direccion: { numero: 1,
        calle: 'calle',
        direccion: 'direccion'
    }
};
const arr = [];
let fn1 = () => { };
function fn2() { }
const fn = () => {
    let x = 2;
    if (x > 5) {
        return 7;
    }
    else {
        return 4;
    }
    return 2;
};
const fn3 = (edad) => {
    if (edad > 18)
        return 'puedes pasar';
    return 'no puedes pasar';
};
function validadEdad(edad, msg = 'txt mensaje') {
    if (edad > 18)
        return 'puedes pasar ' + msg;
    return 'no puedes pasar';
}
validadEdad(22, 'hola');
function ErrorUsuario() {
    throw new Error('Error');
}
let puntaje = 98;
puntaje = 'hola mundo';
let animal = { id: 1, estado: '', name: '' };
function sumaDos(n) {
    if (typeof n === 'number') {
        return n + 2;
    }
    return parseInt(n) + 2;
}
sumaDos('2');
//# sourceMappingURL=index.js.map