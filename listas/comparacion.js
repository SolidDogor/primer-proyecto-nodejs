//Comparar listas
const array = [4, 5, 6, 7, 12, 12, 42, 39, 1, 23, -12];

// array.every(valor =>{
//     if(typeof valor === "number"){
//         return true;
//     } else {
//         return false;
//     }
// })

const resultado1 = array.every(valor => typeof(valor) === "number");
console.log(resultado1);

const resultado2 = array.every(valor => valor > 0);
console.log(resultado2);

//Comparación de listas
const ar1 = [1,2,3,4];
const ar2 = [1,2,3,4];

console.log(ar2 === ar1);

const compararArrays = (array1, array2) => {
    if (array1.length !== array2.length) return false;
    const res = array1.every((valor, i) => valor === array2[i]);
    return res;
}
console.log(compararArrays(ar1,ar2));