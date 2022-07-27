let persona = 
        [
            {
             nombre : "Laura",
             apellido : "Sanchez",
             anyoNacimiento : 1996,
             aficiones: ["futball","tenis","baloncesto","nadar"],
             dni: { "anyoExpedicion" : 2005, "lugarNacimento": "madrid"},
             colorPelo : "negro"
            },

            {
             nombre : "Marta",
             apellido : "Diaz",
             anyoNacimiento : 2000,
             aficiones: ["leer","comer","dormir","los animales"],
             dni: { "anyoExpedicion" : 2002, "lugarNacimento": "madrid"},
             colorPelo : "rojo"
            },
            {
                nombre : "Sonia",
                apellido : "Sainz",
                anyoNacimiento : 2002,
                aficiones: ["ver la tele","andar por el campo","dormir","los animales"],
                dni: { "anyoExpedicion" : 2004, "lugarNacimento": "madrid"},
                colorPelo : "azul"
            },
            {
                nombre : "Macarena",
                apellido : "Rodriguez",
                anyoNacimiento : 1999,
                aficiones: ["hacer deporte","andar por el campo","dormir","los animales"],
                dni: { "anyoExpedicion" : 2003, "lugarNacimento": "madrid"},
                colorPelo : "amarillo"
            }
        ]

let nFrase = "";

 for (let t = 0; t < persona.length; t++){

       for (let propiedad in persona[t]) {

        let resultado = " El objeto es : " + propiedad + ", el valor es " + persona[t][propiedad]

        console.log(resultado);
                               
                   
  
}

}

console.log(nFrase);




for(let u = 0; u<persona.length ; u++){
   
    console.log(persona[u].nombre)
    console.log(persona[u].apellido)
    console.log(persona[u].anyoNacimiento) 
    console.log(persona[u].aficiones)
    console.log(persona[u].dni)
    console.log(persona[u].colorPelo)

}

let s=0;
while(s<persona.length)
        {   
          console.log(persona[s].nombre + " Bucle while")
          console.log(persona[s].apellido + " Bucle while")
          console.log(persona[s].anyoNacimiento + " Bucle while")
          console.log(persona[s].aficiones + " Bucle while")
          console.log(persona[s].dni.anyoExpedicion + " Bucle while")
          console.log(persona[s].dni.lugarNacimento + " Bucle while")
          console.log(persona[s].colorPelo + " Bucle while")

           s++;
                
        }  





for(let person of persona)
        {
            console.log(person.nombre + " for of")
            console.log(person.apellido + " for of")
            console.log(person.anyoNacimiento + " for of")
            console.log(person.aficiones+ " for of")
            console.log(person.dni.anyoExpedicion + " for of")
            console.log(person.dni.lugarNacimento + " for of")
            console.log(person.colorPelo + " for of")

        }
       
