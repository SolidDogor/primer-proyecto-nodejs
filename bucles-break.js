//Bucles for
//for (inicialización; condición; actualización)
for (let i = 0; i < 10; i++){
    console.log(i);
}

let lista = [1,2,3,5];
for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}

for(let valor of lista){
    console.log(valor);
}

lista.forEach(valor =>{
    console.log(valor);
})

let persona = {
    nombre: "Alejandro",
    apellido: "Olivos",
    edad: 21,
    isDeveloper: true
}

console.log(persona.nombre);

let prop = "edad";
console.log(persona[prop]);

for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

let listado = [1,2,3,4,5,6,7,8];

for(let i = 0; i < listado.length; i++){
    if(lista[i] === 3){
        continue;
    }

    console.log(lista[i]);

    if(lista[i] >5){
        break;
    }
}