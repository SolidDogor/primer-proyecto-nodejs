let a = 0.1;
let b = 0.2;
console.log(a + b);
console.log((a + b).toPrecision(1));

let c = 3.4;
console.log(a + c);
console.log(a - c);
console.log(a * c);
console.log(a / c);

console.log(typeof(c));
let c_s = c.toString();
console.log(typeof(c_s));

let d = a / c;
console.log(d.toFixed(4));

let e = d.toFixed(3);
console.log(typeof(e));

console.log(c + e); //Junta ambos como cadenas
console.log(c + Number(e))  //Los suma

let f = 3.8;
console.log(parseInt(f));
console.log(parseFloat(f));

let g = 5;
console.log(parseInt(g));
console.log(parseFloat(g));

//Números hexadecimales
let numHex = 0x3ab22;
console.log(parseInt(numHex,16));
