//Ordenar array con sort()
const array = [3, 40, 12, 2, 0, 1, 10];
console.log(array);

// array.sort((a,b) =>{
//     return -1;
// })
// console.log(array);

array.sort((a,b) =>{
    if(a < b){
        return -1;
    } else if(a > b){
        return +1;
    } else {
        return 0;
    }
})
console.log(array);

const arrayNumerico = [12, 14, 1, 20, 0, 3];
arrayNumerico.sort((a,b) => a - b);
console.log(arrayNumerico);

arrayNumerico.sort((a,b) => b - a);
console.log(arrayNumerico);

const listaObjetos = [
    {nombre: "Alejandro", edad: 21},
    {nombre: "Matias", edad: 12},
    {nombre: "Ricardo", edad: 16},
    {nombre: "Peter", edad: 51}
]

// listaObjetos.sort((a,b) => {
//     if(a.edad < b.edad){
//         return -1;
//     } else if(a.edad > b.edad){
//         return +1;
//     } else {
//         return 0;
//     }
// })
listaObjetos.sort((a,b) => a.edad - b.edad);
console.log(listaObjetos);