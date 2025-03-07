//Iterar los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined];

//Forma antigua (poco eficiente)
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

//Forma ES6 (más eficiente) .forEach()
array.forEach(valor => {
    console.log(valor);
})

let suma = 0;
const arrayNums = [3,6,2,77,2,3,93,19];
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor);
})
console.log(suma);

//Búsqueda de un valor dentro de una lista .find()
const variable = array.find(valor => {
    if (valor == 90){
        return true;
    }
})
console.log(variable);

const listaObjetos = [
    {nombre: "Alejandro", edad: 21},
    {nombre: "Matias", edad: 12},
    {nombre: "Ricardo", edad: 16}
]

const objeto = listaObjetos.find(o => o.nombre === "Alejandro");
console.log(objeto.edad);

const {edad} = listaObjetos.find(o => o.nombre === "Matias");
console.log(edad);