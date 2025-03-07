//Trabajando con listas (arrays o arreglos)
let var1 = 13;
let array = [1, "hola", false, {id: 5}, null, undefined, var1];

console.log(array);

//Acceder a los valores de un array a través de su posición
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

//Agregar un valor a un array
//Con push se agrega un valor al final de la lista
let var2 = 45;
array.push(var2);
console.log(array);
array.push("final",29);
console.log(array);

//Con unshift se agrega un valor al inicio de la lista
array.unshift("inicio",0);
console.log(array);

//Eliminar un valor de un array
//Con pop se elimina un valor al final de la lista
array.pop();
console.log(array);

//Con shift se elimina un valor al inicio de la lista
array.shift();
console.log(array);

//Eliminar, modificar y agregar un valor de un array
//Eliminar
const array2 = [1, 2, 3, 4, 5, 6];
array2.splice(2, 1);    //(indice de inicio, valores a eliminar)
console.log(array2);

//Agregar
array2.splice(2,0,"hola");  //(indice de inicio, no se borra nada, valor a agregar)
console.log(array2);

//Modificar
array2.splice(2,1,3);   //(indice de inicio, valor siguiente a modificar, modificación)
console.log(array2);