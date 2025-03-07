const array = [3,1,2,4,76,71];

const res = array.some(valor => valor < 0);
console.log(res);

const existe = array.some(valor => valor === 3);
console.log(existe);

const listaObjetos = [
    {nombre: "Alejandro", edad: 21},
    {nombre: "Matias", edad: 12},
    {nombre: "Ricardo", edad: 16},
    {nombre: "Peter", edad: 51}
]

let pers = "Matias";
const existePersona = listaObjetos.some(valor => valor.nombre === pers);
console.log(existePersona);

//Obtener lista a través de un objeto iterable
const str = `Hola soy ${pers}`;
console.log(str[12]);

const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([2,3,"hola",4]);
const ar_set = Array.from(set);
console.log(ar_set);

const keys = array.keys();
console.log(keys);

const ar_keys = Array.from(keys);
console.log(ar_keys);

