//Trabajar con métodos más avanzados
//.map() .filter() .reduce()

const array = ["Lima", "Lambayeque", "La Libertad", "Ica"];

const val = array.forEach(v => {
    console.log(v);
    return 4;
})
console.log(val);

// const newArray = array.map((valor, indice) => {
//     return `${indice + 1} - ${valor}`;
// })
const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newArray);

const listaObjetos = [
    {nombre: "Alejandro", edad: 21},
    {nombre: "Matias", edad: 12},
    {nombre: "Ricardo", edad: 16},
    {nombre: "Peter", edad: 51}
]

// const personasMayores = listaObjetos.filter(obj => {
//     if (obj.edad >30){
//         return true;
//     } else {
//         return false;
//     }
// })
const personasMayores = listaObjetos.filter(obj => obj.edad >30)
console.log(personasMayores);

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Ricardo");
console.log(nuevaLista);


const valores = [3, 56, 23, 5, 90, 100];

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + cur;
})
console.log(suma);