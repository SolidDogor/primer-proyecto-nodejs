//Unir dos listas con .concat

const lista1 = ["hola", 2, false, null];
const lista2 = ["adios", -2, true, undefined];

//No modifica los valores de cada lista independientemente
console.log(lista1.concat(lista2));
console.log(lista1);
console.log(lista2);

const lista3 =lista1.concat(lista2);
console.log(lista3);

//Unir dos listas con el factor de propagación
console.log(...lista3);

const lista4 = [...lista1, ...lista2];
console.log(lista4);

const lista5 = [lista1, lista2];
console.log(lista5);