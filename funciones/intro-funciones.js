//Funciones: Bloques de código que se ejecutan con un fin específico
// function saludar() {
//     console.log("HOLA!");
// }
// saludar();

function saludar(nombre){
    console.log(`Hola ${nombre}!`);
}
saludar("Alejandro");

let persona = {nombre : "Matias", edad : 21};
function saludarPersona(objeto){
    console.log(`Hola ${objeto.nombre}, feliz ${objeto.edad} anyos!`);
}
saludarPersona(persona);

//Parámetros opcionales
function imprimeNumero(numero = 7){
    console.log(numero);
}
imprimeNumero();
imprimeNumero(10);


function imprimir(...parametros){
    console.log(parametros);
}
imprimir(1,2,3,4,8,'hola',{id:19});

function suma(...numeros){
    console.log(numeros.reduce((a,b) => a + b));
}
suma(1,2,3,4);