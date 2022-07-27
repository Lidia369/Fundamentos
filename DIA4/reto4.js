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
         //   if(listaNum[f] % 2 == 0){

        //  }
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
}
console.log(posicion);





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

