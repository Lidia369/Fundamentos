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