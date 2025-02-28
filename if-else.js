//Bifurcaciones if...else
// if(true){
//     console.log("Es verdadero");
// }

// if(false){
//     console.log("Es verdadero");
// } else {
//     console.log("Es falso");
// }

let saldo = 50;
let efectivo = 20;

if(efectivo < saldo){
    console.log("Puede sacar dinero");
}

efectivo += 40; //efectivo = efectivo + 40;

if(efectivo < saldo){
    console.log("Puede sacar dinero");
} else {
    console.log("Saldo insuficiente");
}


let calificacion = 2;

if(calificacion === 5){
    console.log("Enhorabuena, aprobaste!");
} else if (calificacion === 1) {
    console.log("Esfuerzate más!");
} else if (calificacion < 1 || calificacion > 5) {
    console.log("Error");
} else {
    console.log("Puedes mejorar!");
}


//Sentencias switch
let nota = 5;

switch(nota) {
    case 1:
        console.log("Estudia!");
        break;
    case 2:
        console.log("Tú puedes!");
        break;
    case 3:
        console.log("Con las justas!");
        break;
    case 4:
        console.log("Satisfactorio!");
        break;
    case 5:
        console.log("Bien hecho!");
        break;
    default:
        console.log("Error!");
        break;
}