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



    for(let i = 0; i < informe.length; i++){
        if(informe[i].colorPelo == "castaño"){
            console.log(informe[i].nombre);
        };
    
        if(informe[i].edad > 30){
            console.log(informe[i].edad);
        };
    
        if((informe[i].colorPelo == "negro" && informe[i].dni.anyoExpedicion < 2017) || (informe[i].edad < 18 && (informe[i].aficiones.includes("comer") && informe[i].aficiones.includes("dormir")))){
            console.log(informe[i].dni.lugarNacimento);
            };
    };