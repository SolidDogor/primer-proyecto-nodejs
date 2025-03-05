let a = 5;
let b = "5";
//Se comparan valores
if (a == b){
    console.log("a es igual a b - Débil");
}
//Se comparan valores y tipos
if (a === b){
    console.log("a es igual a b - Fuerte");
}

let c = 4;
let d = "4";
//Se comparan valores
if (c != d){
    console.log("c es diferente de d - Débil");
}
//Se comparan valores y tipos
if (c !== d){
    console.log("c es diferente de d - Fuerte");
}

//Comparaciones mayor que y menor que
let max = 10;
let min = 5;

if (max > min){
    console.log("max es mayor que min")
}
if (max >= 10){
    console.log("max es mayor o igual que min")
}

if (min < max){
    console.log("min es menor que max")
}
if (min <= max){
    console.log("min es menor o igual que max")
}