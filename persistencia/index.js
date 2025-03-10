// localStorage.setItem("nombre", "Alejandro");
// localStorage.setItem("nombre", "Matias");

//console.log(localStorage.getItem("nombre"));

//localStorage.setItem("persona", JSON.stringify({nombre: "Alejandro", edad: 21}));

//console.log(JSON.parse(localStorage.getItem("persona")));

// JSON.stringify -> convierte un objeto/array en string
// JSON.parse -> convierte un objeto/array convertido en string a objeto

//localStorage.removeItem("nombre");

//sessionStorage.setItem("nombre-session","Alejandro");

/* Cookies */

document.cookie = "nombreCookie = AlejandroCookie";

document.cookie = "nombreCaducidad = Nombre; expires=" + new Date(2025,2,9).toUTCString();
console.log(document.cookie);