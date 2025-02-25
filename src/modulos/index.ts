import { Point } from './Point'
import { Caballos } from "./Animales/Caballos"
import { Chanchitos } from "./Animales/Chanchitos"
import { Animales } from "./Animales/Animales"
import Group, { defaultGroups } from './Group' //export default class Group, named export { defaultGroups } que se importa con {}
/* los default exports no se importan con llaves
    - los named exports se importan con llaves
    - los default exports pueden tener un nombre diferente al de la clase
    - los named exports deben tener el mismo nombre que la clase
    - los default exports pueden tener varios por archivo
    - los named exports pueden tener varios por archivo
*/
const point = new Point(1, 2)
const group = new Group(1, 'Group')
console.log(defaultGroups)

//Wildcard imports
// import * as modulo from './modulos' //importa todos los exports de un archivo

//reexporting
