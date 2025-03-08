//import { eleva, suma, nombre} from './modulos/matematicas.js'
import * as moduloMatematicas from './modulos/matematicas.js';
import getAutor from './modulos/literatura.js';

const sum = moduloMatematicas.suma(4,12);
console.log(sum);

const potencia = moduloMatematicas.eleva(2,21);
console.log(potencia);

console.log(moduloMatematicas.nombre);

console.log(getAutor());