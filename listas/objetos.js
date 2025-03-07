//Trabajando con objetos
const obj = {
    id : 4,
    nombre : "Alejandro",
    isDeveloper: true,
    libros_favoritos : ["Cien años de soledad","Jurassic Park"],
    "4-Días-importantes" : [4,24,10,27,2]
}

console.log(obj.id);
console.log(obj["4-Días-importantes"]);

const prop = "isDeveloper";
console.log(obj[prop]);

//Se asigna la misma dirección de memoria
const obj2 = obj;
console.log(obj2);

obj2.nombre = "Matias";
console.log(obj2.nombre);
console.log(obj.nombre);

let val1 = 4;
let val2 = val1;
val2 = 6;

console.log(val1);
console.log(val2);

//No se asigna la misma dirección de memoria
const obj3 = {...obj};

console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Ricardo";
console.log(obj.nombre);
console.log(obj3.nombre);


const listaPeliculas = [
    {titulo : "Avengers", anyo : 2012},
    {titulo : "Interstellar", anyo : 2014},
    {titulo : "Wall-e", anyo : 2007},
    {titulo : "Shrek", anyo : 2005},
    {titulo : "Wild Robot", anyo : 2024}
];

console.log(listaPeliculas);

listaPeliculas.sort((a,b) => a.anyo - b.anyo);
console.log(listaPeliculas)