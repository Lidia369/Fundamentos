let familiar = 
    {
        "nombre":"Marcos",
        "apellidos": ["Sanchez", "Martin"],
        "edad" : 24,
        "MisPadres" : [
                {
                    "nombre": "ana",
                    "apellidos": ["Martin", "sacristan"],
                    "edad" : 42,
                    "PadresMa" :[
                        {
                            "nombre":"Marcos",
                            "apellidos": ["Sanchez", "Martin"],
                            "edad" : 68,
                        },

                        {
                            "nombre":"Sonia",
                            "apellidos": ["Sacristas", "Ortiz"],
                             "edad" : 69,
                        }],
                },
                
                {
                    "Nombre": "Sergio",
                    "apellidos": ["Sanchez", "Castro"],
                    "edad" : 49,
                    "PadresPa" :[
                        {
                            "nombre":"Arturo",
                            "apellidos": ["Sanchez", "Cuetara"],
                            "edad" : 71,
                        },

                        {
                            "nombre":"Sonia",
                            "apellidos": ["Castro", "Ruiz"],
                            "edad" : 73,
                        }]

                }
            ]        
    }


console.log(familiar.MisPadres[0].PadresMa[0].nombre);
console.log(familiar.MisPadres[1].PadresPa[1].apellidos[1]);
let suma = (familiar.MisPadres[0].edad) + (familiar.MisPadres[1].PadresPa[0].edad);
console.log(suma)

familiar.MisPadres[1].PadresPa[0] = 73;
familiar.MisPadres[1].PadresPa[1] = 71;
console.log(familiar.MisPadres[1].PadresPa);

console.log(familiar.MisPadres[0].PadresMa[1].apellidos.push("Cuetara"));
console.log(familiar.MisPadres[0].PadresMa[1]);

// // familiar.MisPadres[0].apellidos[0].shift();
// // console.log(familiar.MisPadres[0]);

let apAbu = familiar.MisPadres[1].PadresPa[0].apellidos[1];
console.log(apAbu);
console.log(familiar.MisPadres[1].PadresPa[0].apellidos[1].substring(0, apAbu.length - 1));
