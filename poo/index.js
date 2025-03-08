const persona = {
    nombre: "Alejandro",
    edad: 21,
    isDeveloper: true,
    saludo: function(){
        console.log(`Hola, soy ${persona.nombre}`)
    }
}

//console.log(persona);
persona.saludo();

const otra_persona = {
    nombre: "Matias",
    edad: 12,
    isDeveloper: false,
    saludo: function(){
        console.log(`Hola, soy ${otra_persona.nombre}`)
    }
}

otra_persona.saludo();

const crearPersona = (nombre,edad,isDeveloper) => {
    return {
        nombre,         // nombre: nombre,
        edad,           // edad: edad,
        isDeveloper,    // isDeveloper: isDeveloper,
        saludo: function(){
            console.log(`Hola, soy ${nombre}`)
        }
    }
};

const nueva_persona = crearPersona("Ricardo",16,true);
console.log(nueva_persona);

const nueva_persona2 = crearPersona("Peter",51,false);