//Funciones tipo flecha - funciones anónimas

const array = [1,5,3,3,12,81];

// const array2 = array.map(function(valor){
//     return valor*2;
// });
const array2 = array.map((valor) => valor * 2);
console.log(array2);


// const dobleDelValor = valor => {
//     return valor * 2;
// }
const dobleDelValor = valor => valor * 2;
function doble(valor) {
    return valor * 2;
}
console.log(dobleDelValor(4));
console.log(doble(4));

const array3 = array.map(dobleDelValor);    //Lo mismo que la linea 8

console.log(array3);