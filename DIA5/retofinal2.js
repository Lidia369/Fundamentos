let matriz = [];

function vector (n,m){
  let array = [];
  for (let i = 0; i<n ;i++){

      array[i]= Math.round(Math.random()*m)
  }

  return array;

}

// console.log(vector(8,20));

for (let i = 0; i < 10; i++){

  matriz[i] = vector(10,50)
   
}

console.log(matriz);


// function vector (n,m){
//   for (let i = 0; i<n ;i++){

//       array[i]= Math.round(Math.random()*m)
//   }

//   return array;

// }

// console.log(vector(8,20));


// matriz[i] = Math.round(Math.random()*50)
// matriz2[i] = Math.round(Math.random()*50)
// sumaMatrices[i] = matriz[i] + matriz2[i]
// multMatriz[i] = matriz[i] * 2

//for (let i= 0; i<50;i++){
  //  sumaMatrices[i] = matriz[i] + matriz2[i]
//}




// console.log(matriz);
// console.log(matriz2);
// console.log(sumaMatrices);
// console.log(multMatriz);