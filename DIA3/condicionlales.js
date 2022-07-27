//DIA3 - CONDICIONALES
//operadores
//&& -AND SE TIENE QUE CUMPLIR LAS DOS
// || - TIENE QUE CUMPLIR UAN DA LAS DOSCONCDICIONES
//!  - SI NO CUMPLE ESTA CONDICION 


//IF - ELSE IF , ELSE

let edad = 19;
let carnet = true;

if(edad < 18){
    console.log("no puedes")
}else if (edad > 18 && carnet == true){
    console.log("puedes")
}





//RETO 1
let cruzar = true;
let color = "verde";
let coche = false;

if(color == "verde" && coche==false){
    cruzar = true;
    console.log("puedes pasar");
}else{
    cruzar = false; 
    console.log("No puedes pasar");
}

cruzar = (color == "verde" && coche == false) ? "puedes pasar" : "no puedes pasar"

//RETO2

let recetas = "piña";
switch(recetas){

    case "tomate" : 
        console.log("Ensalda con tomate")
        break;
    case "atun" : 
        console.log("Ensalda con atun")
        break;
    case "pollo" : 
        console.log("Ensalda con pollo")
        break;
    case "queso" : 
        console.log("Ensalda con queso")
        break;
    case "piña" : 
        console.log("Ensalda con piña")
        break;
    case "aceitunas" : 
        console.log("Ensalda con ceitunas")
        break;
    case "pavo" : 
        console.log("Ensalda con pavo")
        break;
    case "manzana" : 
        console.log("Ensalda con manzana")
        break;
    case "maiz" : 
        console.log("Ensalada con maiz")
        break;
    case "picante" : 
        console.log("Ensalada con maiz")
        break;

    default:console.log("No tenemos ese ingrediente");
} 


//RETO3

let platos3 = true;
let dj = true;
let barraLibre2H = true;
let coctel = false;
let platos2 = true; 
let barraLibre1H = true;

if((platos3 == true && dj == true && barraLibre2H == true) ||(coctel = true && platos2 == true && barraLibre1H == true)){
    console.log("Tenemos restaurante para la celebracion");
}else{
    console.log("No tenemos restaurante")
}

let restaurante = true;

//(platos3 == true && dj == true; barraLibre2H&&)||(coctel = true && platos2 && true && barraLibre1H? true: false
//  nose si esto se escribe asi


//RETO 4


let informe = [
    
{
"nombre" : "Alicia",
"apellido" : "Sanchez",
"anyoNacimiento" : 2000,
"aficiones": ["Leer","Musica","Comer"],
"dni": { "anyoExpedicion" : 2025,
"lugarNacimento": "madrid"},
"colorPelo" : "negro"
},

{
"nombre" : "Mario",
"apellido" : "Castro",
"anyoNacimiento" : 2002,
"aficiones": ["Bailar","montar a caballo","dormir"],
"dni": { "anyoExpedicion" : 2019,
"lugarNacimento": "madrid"},
"colorPelo" : "rubio"
},

{
"nombre" : "Fran",
"apellido" : "Martin",
"anyoNacimiento" : 2005,
"aficiones": ["Escalar","Music","Comer"],
"dni": { "anyoExpedicion" : 2025,
"lugarNacimento": "madrid"},
"colorPelo" : "rojo"
},
{
    "nombre" : "Maria",
    "apellido" : "Martinez",
    "anyoNacimiento" : 1900,
    "aficiones": ["dormir","Motos","Ir al campo"],
    "dni": { "anyoExpedicion" : 2224,
    "lugarNacimento": "madrid"},
    "colorPelo" : "castaño"
    }
]



if(informe[0].colorPelo == "castaño"){
    console.log("si");
}else {
    console.log("no");
}
if(informe[1].colorPelo == "castaño"){
    console.log("si");
}else {
    console.log("no");
}
if(informe[2].colorPelo == "castaño"){
    console.log("si");
}else {
    console.log("no");
}
if(informe[3].colorPelo == "castaño"){
    console.log("si");
}else {
    console.log("no");
}


if(informe[0].anyoNacimiento < 1992){
    console.log(informe[0].nombre)
}
if(informe[1].anyoNacimiento < 1992){
    console.log(informe[1].nombre)
}
if(informe[2].anyoNacimiento < 1992){
    console.log(informe[2].nombre)
}
if(informe[3].anyoNacimiento < 1992){
    console.log(informe[3].nombre)
}


if(informe[0].colorPelo == "negro"){
    console.log(informe[0].dni.lugarNacimento);
}
if(informe[1].colorPelo == "negro"){
    console.log(informe[1].dni.lugarNacimento);
}
if(informe[2].colorPelo == "negro"){
    console.log(informe[2].dni.lugarNacimento);
   }
if(informe[3].colorPelo == "negro"){
    console.log(informe[3].dni.lugarNacimento);
} 


if(informe[0].dni.anyoExpedicion > 2022){
    console.log("Todo bien " + informe[0].nombre);
}else{
    console.log("Pide cita " +  informe[0].nombre);
}

if(informe[1].dni.anyoExpedicion > 2022){
    console.log("Todo bien " + informe[1].nombre);
}else{
    console.log("Pide cita " +  informe[1].nombre);
}

if(informe[2].dni.anyoExpedicion > 2022){
    console.log("Todo bien " + informe[2].nombre);
}else{
    console.log("Pide cita " +  informe[2].nombre);
}

if(informe[3].dni.anyoExpedicion > 2022){
    console.log("Todo bien " + informe[3].nombre);
}else{
    console.log("Pide cita " +  informe[3].nombre);
}


if(informe[0].anyoNacimiento > 2004){
    console.log("Eres menor de edad " + informe[0].nombre );
}else {
    console.log("Ya puedes beber " + informe[0].nombre)
}
if(informe[1].anyoNacimiento > 2004){
    console.log("Eres menor de edad " + informe[1].nombre );
}else {
    console.log("Ya puedes beber " + informe[1].nombre)
}
if(informe[2].anyoNacimiento < 2004){
    console.log("Eres menor de edad " + informe[2].nombre );
}else {
    console.log("Ya puedes beber " + informe[2].nombre)
}
if(informe[3].anyoNacimiento < 2004){
    console.log("Eres menor de edad " + informe[3].nombre );
}else {
    console.log("Ya puedes beber " + informe[3].nombre)
}

if (informe[0].aficiones == "comer" || "dormir"){
    console.log("Muy buenas aficiones " + informe[0].nombre)
}else {
    console.log("Deberias dormir " + informe[0].nombre )
}

if (informe[1].aficiones == "comer" || "dormir"){
    console.log("Muy buenas aficiones " + informe[1].nombre)
}else {
    console.log("Deberias dormir " + informe[1].nombre )
}

if (informe[2].aficiones == "comer" || "dormir"){
    console.log("Muy buenas aficiones " + informe[2].nombre)
}else {
    console.log("Deberias dormir " + informe[2].nombre )
}

if (informe[3].aficiones == "comer" || "dormir"){
    console.log("Muy buenas aficiones " + informe[3].nombre)
}else {
    console.log("Deberias dormir " + informe[3].nombre )
}




// RETO 5

let familiar = {
    "nombre":"Marcos",
    "apellidos": ["Sanchez", "Martin"],
    "edad" : 24,
    "colorPelo": "negro",
    "dinero" : 80000 ,
    "coches" : [

        {
        "marca": "ford",
        "numeroAsientos" : 4,
        "esElectrico" : true
        },

        { "marca": "audi",
        "numeroAsientos" : 5,
        "esElectrico" : false
        },

        { "marca": "seat",
        "numeroAsientos" : 5,
        "esElectrico" : true
        }
    ],
    "MisPadres" : [
        {
            "nombre": "ana",
            "apellidos": ["Martin", "sacristan"],
            "edad" : 42,
            "colorPelo": "negro",
            "dinero" : 80000 ,
            "coches" : [
                {
                "marca": "tesla",
                "numeroAsientos" : 4,
                "esElectrico" : true
                },

                { "marca": "jugar",
                "numeroAsientos" : 2,
                "esElectrico" : false
                },

                { "marca": "audi",
                "numeroAsientos" : 4,
                "esElectrico" : true
                }
            ],
            "PadresMa" :[
                {
                "nombre":"Marcos",
                "apellidos": ["Sanchez", "Martin"],
                "edad" : 68,
                "colorPelo": "negro",
                "dinero" : 80000 ,
                "coches" : [
                

                    {
                    "marca": "ford",
                    "numeroAsientos" : 4,
                    "esElectrico" : true
                    },
    
                    { "marca": "seat",
                    "numeroAsientos" : 5,
                    "esElectrico" : false
                    },
    
                    { "marca": "BMW",
                    "numeroAsientos" : 4,
                    "esElectrico" : true
                    }
                ] ,
                }, 
                {
                "nombre":"Sonia",
                "apellidos": ["Sacristas", "Ortiz"],
                "edad" : 69,
                "colorPelo": "negro",
                "dinero" : 80000 ,
                "coches" : [
                

                    {
                    "marca": "hunday",
                    "numeroAsientos" : 4,
                    "esElectrico" : true
                    },
    
                    { "marca": "peugeot",
                    "numeroAsientos" : 5,
                    "esElectrico" : true
                    },
    
                    { "marca": "ford",
                    "numeroAsientos" : 4,
                    "esElectrico" : true
                    }
                ] 
                }
            ]
        },
        {
            "nombre": "Sergio",
            "apellidos": ["Sanchez", "sacristan"],
            "edad" : 42,
            "colorPelo": "negro",
            "dinero" : 80000 ,
            "coches" : [

                {
                "marca": "seat",
                "numeroAsientos" : 4,
                "esElectrico" : true
                },

                { "marca": "renault",
                "numeroAsientos" : 5,
                "esElectrico" : true
                },

                { "marca": "ford",
                "numeroAsientos" : 4,
                "esElectrico" : true
                }
            ] ,

            "PadresMa" :[
                {
                "nombre":"Marcos",
                "apellidos": ["Sanchez", "Martin"],
                "edad" : 68 ,
                "colorPelo": "negro",
                "dinero" : 80000 ,
                "coches" : [
    
                    {
                    "marca": "audi",
                    "numeroAsientos" : 4,
                    "esElectrico" : true
                    },
    
                    { "marca": "mercedes",
                    "numeroAsientos" : 5,
                    "esElectrico" : true
                    },
    
                    { "marca": "ferrari",
                    "numeroAsientos" : 4,
                    "esElectrico" : true
                    }
                ]
                }, 
                {
                "nombre":"Sonia",
                "apellidos": ["Sacristas", "Ortiz"] ,
                "edad" : 69 ,
                "colorPelo" : "negro",
                "dinero" : 80000 ,
                "coches" : [
    
                    {
                    "marca": "ford",
                    "numeroAsientos" : 4,
                    "esElectrico" : true
                    },
    
                    { "marca": "seat",
                    "numeroAsientos" : 5,
                    "esElectrico" : true
                    },
    
                    { "marca": "audi",
                    "numeroAsientos" : 4,
                    "esElectrico" : true
                    }
                ]
                }
            ]
        }


    ]
}
       
let colorPeloAbuMa = familiar.MisPadres[0].PadresMa[1].colorPelo;
let cohceAbuPa = familiar.MisPadres[1].PadresMa[0];
familiar.colorPelo



