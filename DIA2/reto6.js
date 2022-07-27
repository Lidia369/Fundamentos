let objeto = 
    {
        "nombre": "Arturo",
        "aficiones" : ["nadar" , "baloncesto", "leer","ir en tren"],
        "dni" : 
            {
                "numero": "51242916F",
                "fecha":"15 de marxo de 2020"
            }
    }

console.log(objeto.nombre);
console.log(objeto.aficiones);
console.log(objeto.aficiones[1]);
console.log(objeto.dni);
console.log(objeto.dni.fecha);
objeto.dni.fecha = "26 de febrero de 2019";
console.log(objeto.dni.fecha);

delete objeto.aficiones[2];
console.log("Delete  " + objeto.aficiones);

objeto.aficiones.push("ir en coche");
console.log(objeto);