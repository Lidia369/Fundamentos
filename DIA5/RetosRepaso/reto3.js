let sumCuadrados = 0;

for (let i = 0; i<101; i++){

    sumCuadrados += Math.pow(i,2);
}

console.log(sumCuadrados);


let arra = [2, 10, 45, 33, 22, 14];
let arrNue = [];

for (let i = 0; i<arra.length; i++){

    arrNue[i] = arra[i]*2

}

console.log(arrNue);




// let arra = [2, 10, 45, 33, 22, 14];

let arrNueOf = [];
let arr= [];

for ( let arr of arra){

    console.log(arr*2);

}

// console.log(arrNueOf);

function cuadrados (n){

    return(console.log(n*n))

}

cuadrados(4);







