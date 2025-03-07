const miFuncion = val => {
    if (typeof val === "number"){
        return 2 * val;
    }
    //return false;
    throw new Error("El valor debe ser de tipo número");
}

//console.log(miFuncion("ala"));

const numero = 9;

try{
    //Código que puede fallar
    console.log("Está ejecutandose de manera correcta");
    const doble = miFuncion(numero);
} catch(e) {
    //En caso de fallar, quiero que ejecutes
    console.error(`El valor de e es: ${e}`);
    console.error("ERROR!");
} finally {
    console.log("Esto se va a ejecutar tanto si se produce un error como no");
}

//InternalError, SyntaxError, TypeError, RangeError y ReferenceError