//Inheritance - Herencia
class Persona {
    _nombre
    _edad
    constructor(nom,edad){
        this._nombre = nom;
        this._edad = edad;
    }

    saludo(){
        console.log(`Hola soy ${this._nombre}, tengo ${this._edad} años`);
    }
}

class Desarrollador extends Persona {
    constructor(nombre,edad,lenguaje) {
        super(nombre,edad);
        this.lenguaje = lenguaje;
    }

    saludo(){   //Override
        super.saludo();
        console.log(` y soy desarrolador de ${this.lenguaje}`);
    }
}

const nuevoDev = new Desarrollador("Alejandro",21,"Javascript");
nuevoDev.saludo();

//Polimorfismo => varias formas