//Trabajando con fechas
const fecha = new Date();

console.log(fecha);

//Los meses inicializan en 0 y terminan en 11
const fecha2 = new Date(1987,10,20, 2, 23, 21, 122);
console.log(fecha2);

const fecha3 = new Date(0);
console.log(fecha3);

const fecha4 = new Date("September 4, 2003 06:30:12");
console.log(fecha4);

console.log(fecha4 < fecha);

const fecha5 = new Date(1987,10,20, 2, 23, 21, 122);

console.log(fecha2 === fecha5); //NO SE PUEDE COMPARAR ASI

console.log(fecha2.getTime() === fecha5.getTime());


console.log(fecha2.getDate());
console.log(fecha4.getMonth() + 1);
console.log(fecha.getFullYear());

console.log(fecha2.toLocaleDateString());