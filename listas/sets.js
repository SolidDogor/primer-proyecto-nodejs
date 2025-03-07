//Sets o conjuntos
const array = [1,2,3,4,4,4,4,5,"hola",{id: 5},{id: 5},'hola'];

const miSet = new Set(array);
//En un array hay valores duplicados
console.log(array);
//En un set no hay valores duplicados
console.log(miSet);


miSet.add(9);
console.log(miSet);
miSet.add(9);
console.log(miSet);


miSet.delete("hola");
console.log(miSet);

// miSet.clear();
// console.log(miSet);  Set { }


console.log(miSet.has(100));


console.log(miSet.size);


miSet.forEach(valor =>{
    console.log(valor);
})

const it_miSet = miSet.values();
console.log(it_miSet);

const ar_miSet = [...miSet];
console.log(ar_miSet);