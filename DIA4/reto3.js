let persona = 
        [
            {
             "nombre" : "Laura",
             "apellido" : "Sanchez",
             "anyoNacimiento" : 1996,
             "aficiones": ["futball","tenis","baloncesto","nadar"],
             "dni": { "anyoExpedicion" : 2005, "lugarNacimento": "madrid"},
             "colorPelo" : "negro"
            },

            {
             "nombre" : "Marta",
             "apellido" : "Diaz",
             "anyoNacimiento" : 2000,
             "aficiones": ["leer","comer","dormir","los animales"],
             "dni": { "anyoExpedicion" : 2002, "lugarNacimento": "madrid"},
             "colorPelo" : "rojo"
            },
            {
                "nombre" : "Sonia",
                "apellido" : "Sainz",
                "anyoNacimiento" : 2002,
                "aficiones": ["ver la tele","andar por el campo","dormir","los animales"],
                "dni": { "anyoExpedicion" : 2004, "lugarNacimento": "madrid"},
                "colorPelo" : "azul"
            },
            {
                "nombre" : "Macarena",
                "apellido" : "Rodriguez",
                "anyoNacimiento" : 1999,
                "aficiones": ["hacer deporte","andar por el campo","dormir","los animales"],
                "dni": { "anyoExpedicion" : 2003, "lugarNacimento": "madrid"},
                "colorPelo" : "amarillo"
            }
        ]

for(let h = 0; h<persona.length ; h++){
    
    if((persona[h].anyoNacimiento > 1978) && (persona[h].anyoNacimiento < 2000)){

        console.log(persona[h].nombre + " Tu edad está entre 40 y 20 años")
    }else{
        console.log(persona[h].nombre +" Tu edad es menor de 20" )
    }
}


// let r = 0
// while (s < persona.length)
//         {
//             if((persona[s].anyoNacimiento > 1978) && (persona[s].anyoNacimiento < 2000)){

//                 console.log(persona[s].nombre + " Tu edad está entre 40 y 20 años while")
//             }else{
//                 console.log(persona[s].nombre +" Tu edad es menor de 20 while" )
//             }

//             r++


//         }


for(let person of persona)
        {
            if((person.anyoNacimiento > 1978) && (person.anyoNacimiento < 2000)){
                console.log(person.nombre + " Tu edad está entre 40 y 20 años" + "creado con for of")

            }else{console.log(person.nombre +" Tu edad es menor de 20"  + "creado con for of" )

            }

        }

