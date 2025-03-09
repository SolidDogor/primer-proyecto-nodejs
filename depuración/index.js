const persona = {
    nombre: "Alejandro",
    edad: 21
}

console.log(persona);

function obtenDobleEdad(edad){
    return 2 * edad;
}

const dobleEdad = obtenDobleEdad(persona.edad);

console.log(dobleEdad);