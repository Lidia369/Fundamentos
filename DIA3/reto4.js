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
    
    