let numero1 = ["1","2","3","4","5"];
let numero2 = ["6","7","8","29","10"];
let numero3 = ["ABC","ZDF","TRO","GRS","LRG"];

let matriz = [numero1, numero2, numero3];

console.log(matriz[2]);
console.log(matriz[2][4]);
console.log(matriz[2][4][2]);
matriz[2] = [1,2,3,4,5];
console.log(matriz[2]);
matriz[1][3] = true;
console.log(matriz[1][3]);
console.log(matriz[1]);
matriz[0].push(6);
console.log(matriz[0]);

console.log(matriz[0].shift(matriz[0][1]));
console.log(matriz[0]);

console.log(matriz[1].pop(matriz[1][4]));
console.log(matriz[1]);

// console.log(matriz.sort());
console.log(numero3.sort());