let direccion = 
    {
        "calle":"Santo del angel",
        "numero": 48,
        "piso" : 1,
        "puerta": 2
    }

let direccion2 = direccion;
console.log(direccion2);

let direccion3 = {...direccion}
console.log(direccion3);



direccion.cidudad = "Madrid"
console.log(direccion);
console.log(direccion3);

direccion3.pais = "España"
let concatenacionObj = {...direccion, ...direccion3};
console.log(concatenacionObj);


let nombres = ["Lucas","Marcos" , "Sofia", "Arturo"];

let nombres2 = nombres

let nombres3 = [...nombres]

nombres.push("Laura")

console.log(nombres);
console.log(nombres2);
console.log(nombres3);

let concatenacionArr = [...nombres, ...nombres3];