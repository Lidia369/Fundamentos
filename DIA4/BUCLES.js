//DIA 4 BUCLES

// CONDICION DE PARADA SI NO SE CREA UN BUCLE INFINITO

//FOR
//RECORE LOS ELEMENTOS DE UN CONJUNTO UNO A UNO
// EJEMPLO DE SINTAXIS
 for (let i = 0; i < 5; i++)
{
    console.log("Bienvenido a codenotch" + i)
}

let nombres= ["Juan", "Pepe", "Maria","Sonia"];

for (let i = 0 ; i < nombres.length; i++)
{
    console.log(nombres[i] + " que tengas un buen dia");
}

// Los 5 primeros nombres de un array

let carrera = ["Maria", "Arturo" , "Martin" , "Fernando", "Victor", "Paz", "Jose"];
let texto = "Los cinco primeros son : ";
for (let i=0; i<5; i++)
{
    if (i<4)
            (texto += carrera[i] + ",");
    else
            (texto = texto + carrera[i] + ".");
            
    console.log(texto); 
}
console.log(texto);



//WHILE  -- se ejecuta siempre que la condicion que le especifiques sea true --- la condicion es mas compleja

let i=0 ;

while(i<5)
            {
                if (i<4)
                    (texto += carrera[i] + "," + "Esto esta ejecutado con el while");
                else
                    (texto = texto + carrera[i] + ".");
            
                console.log(texto); 
                i++;

            }   





// DO WHILE  -- tiene que ejecuatrse una vez


    do
    {
        if (i<4)
            (texto += carrera[i] + "," + "Esto esta ejecutado con el  do while");
        else
            (texto = texto + carrera[i] + ".");

        console.log(texto); 
        i++;

    } while(i<5)




// for of --- recore todo el conjunto de datos se escribe de manera abreviada


let corredores = ["Maria", "Arturo" , "Martin" , "Fernando", "Victor", "Paz", "Jose"];

let text = "";

for (let corredor of corredores)
        {
            text += corredor + ",";
            console.log(text)

        }   

    console.log(text)



//FOR IN --- RECORER LAS POROPIEDADES DE UN OBJETO


let miObjeto = 
             {

                "nombre" : "Alicia",
                "apellido" : "Gonzalez",
                "apellido2" : "Garzia",
                "edad" : 26

             }
let frase = "";
for (let clave in miObjeto)

    {

        frase += " La clave " + clave + " tiene valor " + miObjeto[clave] + "\n"

    }


    console.log(frase);




//RETOS DIA 4
// RETO 

//Todos los numeros del 1 al 10

for (let i = 1; i < 11; i++)
        {
            console.log(i);
        }

let k=0;
while(k<11)
        {   
            console.log(k + " Bucle while"); 
            k++;
        
        }   

//Numeros pares

 for (let i = 2; i < 11; i+=2)
        {
            console.log(i);
        }

let j=2;
while(j<11)
        {   
          console.log(j + " Bucle while"); 
           j+=2;
                
        }  

//Numeros impares divisibles entre 3

for (let i = 0; i < 11; i+=3)
        {
            if(i % 2 != 0) 
            console.log(i);
        }

let z = 0;
while(z < 11)
{    
    console.log(z + "bucle while fuera")
            if(z % 2 != 0)
            console.log(z + " Bucle while"); 
            z+=3;
                
}   
        

//RETO 2

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

let nFrase = "";

for (let t = 0; t < persona.length; t++){

       for (let propiedad in persona[t]) 
                                        {
                    if(propiedad == "dni"){
                    console.log(persona[t].dni)
                    }else {
                    console.log("Hecho con for in " + " Las propiedades de este objeto" + propiedad + " es " + persona[t][propiedad] + "\n")
                    }
  
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
       



// RETO 3


for(let h = 0; h<persona.length ; h++){
    
    if((persona[h].anyoNacimiento > 1978) && (persona[h].anyoNacimiento < 2000)){

        console.log(persona[h].nombre + " Tu edad está entre 40 y 20 años")
    }else{
        console.log(persona[h].nombre +" Tu edad es menor de 20" )
    }
}


let r = 0
while (s <persona.length)


for(let person of persona)
        {
            if((person.anyoNacimiento > 1978) && (person.anyoNacimiento < 2000)){
                console.log(person.nombre + " Tu edad está entre 40 y 20 años" + "creado con for of")

            }else{console.log(person.nombre +" Tu edad es menor de 20"  + "creado con for of" )

            }

        }

//for (let g =0; g < persona.length-1; g++)
           // {
           //  persona.aficiones.push("juagar a la play")
           // }

            //console.log(persona);

//for(let person of persona)
            //{
               
    
            //}



// RETO 4


let factorial = 6;
var total = 1; 
	for (p=1; p<=factorial; p++) {
		total = total * p; 
	}
    console.log(total);




 let listaNum = [2,4,5,6,8,12,14,16,18,20];

 for (let v = 0; v<listaNum.length;v++)
            {
                console.log(listaNum[v]% 2 == 0);
            }


// no se organizar el while creo que la forma es asi pero me sale error
//let f = 0;
//while (f < listaNum.length)

       // {   
         //   (listaNum[f] % 2 == 0);

           //f++;
                
        //}  
        //console.log(listaNum[f] + "salida de while")

let guardar = 0;
for (let m= 0; m<100; m++){
guardar = guardar + m;

}

console.log(guardar);

//while pepe

let arrNombres = ["Lucia", "Rodrigo","Sandra","Pepe","Raul","David"]
let posicion = 0;
let b =0;
while(b < arrNombres.length){
    if (arrNombres[b] == "pepe"){
        posicion = b
        b = arrNombres.length
   }
        b++ 
        console.log(posicion);

}





let array = []
let array1 = []

for(i=0; i < 100; i++){
    array[i] = Math.round(Math.random()*20)
    array1[i] = Math.round(Math.random()*20)
}

console.log(array)
console.log(array1)

let sumaArr = [];
for (i =0; i<array.length; i++){
    sumaArr[i] = array[i] + array1[i] 

}

console.log(sumaArr);

