class Persona {
    //Private -> #
    //Solo se puede acceder desde dentro de la clase
    #nombre
    #edad

    //Protected -> _
    //Solo se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true
    constructor(nom,edad){
        this.#nombre = nom,
        this.#edad = edad
    }

    saludo(){
        console.log(`Hola soy ${this.#nombre}, tengo ${this.#edad} años`);
    }

    obtenNombre(){  //Función getter -> Permite acceder de forma controlada a un atributo privado
        return this.#nombre;
    }

    getEdad(){
        return this.#edad;
    }

    setEdad(nuevaEdad){
        this.#edad = nuevaEdad;
    }
}

const persona = new Persona("Alejandro",21);
console.log(persona);
console.log(persona.nombre);
persona.saludo();

// persona.nombre = "Adios";
// console.log(persona);

console.log(persona.obtenNombre());
//console.log(persona.#obtenEdad());
console.log(persona._isDeveloper);

//Getter -> métodos que nos permiten obtener atributos / métodos privados o protegidos
const edad = persona.getEdad();
console.log(edad);
//Setter -> métodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
persona.setEdad(40);
console.log(persona.getEdad());