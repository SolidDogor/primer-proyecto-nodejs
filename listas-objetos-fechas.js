//Listas -> array o arreglo
const lista1 = [1, "hola", true, undefined, null];
const lista2 = new Array(2,"adios",false,undefined,null);
const lista3 = new Array(3);
lista3[0] = "Soy el primer elemento con indice 0";
const lista4 = [lista1, lista2, lista3];

console.log(lista1);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Objetos
const movil = {
    marca: "Xiaomi",
    modelo: "Redmi9",
    color: "Azul",
    contactos: ["Alejandro","Matias","Ricardo"],
    enVenta: false,
    tarjeta: {
        marca: "Kingston",
        almacenamiento: 64
    }
}
movil.anio = 2019;
movil.marca = "Samsung";
console.log(movil.tarjeta.marca);
console.log(movil.anio);

//Fechas
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);

const fecha_cadena = new Date("march 27 1997");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0, 15);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth();
const anyo = ahora.getFullYear();

console.log(dia,mes,anyo);