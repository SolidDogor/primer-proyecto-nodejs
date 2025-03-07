//Obtener una lista a partir de otra con .slice()
const array = ["hola", 1, 2, 3, true, null, "adios"];

//Método .slice() NO MODIFICA el valor del array original
console.log(array.slice(1,4));
const array2 = array.slice(2,5);
console.log(array2);

const array3 = array.slice(2, -2);
console.log(array3);
