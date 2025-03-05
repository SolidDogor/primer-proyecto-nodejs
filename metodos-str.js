//Métodos utilizados con cadenas de caracteres
//Longitud de una cadena
let str = "Hola soy un string";
console.log(str.length);

//Obtener parte de una cadena
let slice_str = str.slice(5,10);
console.log(slice_str);

let substring_str = str.substring(5,10);
console.log(substring_str);

//Reemplazar parte de una cadena
let cadena = "Hola mi nombre es Alejandro";
console.log(cadena);

console.log(cadena.replace("Alejandro","Matias"));

let texto_largo = "La vida es sueño, y los sueños, sueños son";
//Se remplaza la primera instancia de la palabra
console.log(texto_largo.replace("sueños","gatos"));
//Se encierra las palabras a remplazar con /palabra/g 
console.log(texto_largo.replace(/sueños/g,"gatos"));

//Comparar dos cadebas convirtiendolas a mayúsculas o minúsculas
let input = "Virgo";
let db = "virgo";

console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());

//Concadenar dos cadenas
let str_1 = "Hola soy la primera cadena.";
let str_2 = "Y yo la segunda cadena";

console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

//Eliminar espacios al inicio y al final
let str_3 = "       Hola soy un string con espacios   ";
console.log(str_3.length);
//trim()
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

//Obtener un caracter en cierta posición
let str_4 = "Hola soy el cuarto string";

console.log(str_4.charAt(5));
console.log(str_4[5]);

//Obtener una palabra en cierta posición
let str_5 = "Ron es un gato que araña. Ron come mucha galleta.";
console.log(str_5.indexOf("Ron"));
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Ron"));

let texto_largo_2 = "He's a real nowhere man, sitting in a nowhere land, making all this nowhere plans for nobody";

console.log(texto_largo_2.match(/nowhere/g));

//¿Existe la palabra dentro del texto?
console.log(texto_largo_2.includes("he"));
//Saber si un texto empieza con una palabra(s) o letra(s)
console.log(texto_largo_2.startsWith("H"));
//Saber si un texto empieza con una palabra(s) o letra(s)
console.log(texto_largo_2.endsWith("ody"));