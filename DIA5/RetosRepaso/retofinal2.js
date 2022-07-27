// let matriz = [[],[],[],[],[],[],[],[],[],[]];
// let matriz2 = [[],[],[],[],[],[],[],[],[],[]];
// let sumaMatrices = [[],[],[],[],[],[],[],[],[],[]];
// let multMatriz = [[],[],[],[],[],[],[],[],[],[]];
    
// for (let i = 0; i < 50; i++){
//     matriz[i] = Math.round(Math.random()*50)
//     matriz2[i] = Math.round(Math.random()*50)
//     sumaMatrices[i] = matriz[i] + matriz2[i]
//     multMatriz[i] = matriz[i] * 2
    
   
// }

// //for (let i= 0; i<50;i++){
//   //  sumaMatrices[i] = matriz[i] + matriz2[i]
// //}




// console.log(matriz);
// console.log(matriz2);
// console.log(sumaMatrices);
// console.log(multMatriz);

let matriz = [[],[],[],[],[],[],[],[],[],[]];

let matriz1 = matriz;
let matriz2 = matriz;

console.log(matriz1);
console.log(matriz2);

console.log("hola");

let sumato;
let sum = new Array(10);

for(i = 0; i < 10; i++){
        sum[i] = new Array(10);
     for(j=0; j< 10; j++){

        sumato = matriz1[i][j]+matriz2[i][j];
        sum[i][j] = sumato;
    }
}

console.log("esto es la suma");

console.log(sum);


console.log("Esta la multi");
let ar = sum;
let arrr;
let array = new Array(10);
let n = Math.floor(Math.random());

for(i = 0; i < 10; i++){
    array[i] = new Array(10);
 for(j=0; j< 10; j++){

    arrr = ar[i][j](Math.round(Math.random()*10));
    array[i][j] = arrr;
}
}

console.log(array);