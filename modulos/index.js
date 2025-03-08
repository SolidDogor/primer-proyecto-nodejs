//Formas de importar/exportar módulos
//1. CommonJS - require
//2. Import ES6 - import



// const moduloMatematicas = require('./modulos/matematicas.js');
// const factorial = moduloMatematicas.factorial;
// const suma = moduloMatematicas.suma;
// const {factorial, suma} = moduloMatematicas;
//console.log(moduloMatematicas);

const {factorial, suma} = require('./modulos/matematicas.js');

const fact = factorial(5);
console.log(fact);

const sum = suma(100,122);
console.log(sum);