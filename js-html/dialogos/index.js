const boton = document.querySelector("#btn");

//console.log(boton);

boton.addEventListener("click", () => {
    // alert("Se ha hecho click!");
    // confirm("Estas de acuerdo?") && console.log("OK");
    // confirm("¿Estás de acuerdo?")
    //     ?console.log("OK")
    //     :console.log("NO!!")

    const respuesta = confirm("¿Seguro?");
    if (respuesta) {
        console.log("Estás de acuerdo");
    } else {
        console.log("No estás de acuerdo");
    }
})

const botonInfo = document.querySelector("#info");
botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cuál es tu nombre?");
    if (nombre){
        console.log("Hola " + nombre);
    } else {
        console.log("No se introdujo nada.");
    }
})

const lista = [{
    nombre: "Alejandro",
    edad: 21
} , {
    nombre: "Matias",
    edad: 12
} , {
    nombre: "Peter",
    edad: 51
}]

//console.log(lista);
console.table(lista);