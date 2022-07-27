let array = [];

function vector (n,m){
    for (let i = 0; i<n ;i++){

        array[i]= Math.round(Math.random()*m)
    }

    return array;

}

console.log(vector(8,20));


let ve1 = [2,4,6,8]
let ve2 = [3,5,7,9]
let ve3 = [];



function sumaVector(v1, v2){
    
    if(v1.length == v2.length){
        for (let i = 0; i<v1.length; i++){
            ve3[i] = v1[i] + v2[i]
      
        }

    }else{
        console.log("No tiene los mismos")
    }
    return ve3;
    

}

console.log(sumaVector(ve1,ve2) + " suma")


let v = [2,4,6,8]
let vn = []

function productoNumeroVector(n, v){

    for(let i=0; i<v.length; i++){

        vn[i] = v[i]*n

    }

    return vn;
}

console.log(productoNumeroVector(2,v) + " multipicacion");


let veResta = [];

function restaVector(v1, v2){
    
    if(v1.length == v2.length){
        for (let i = 0; i<v1.length; i++){
            veResta[i] = v1[i] - v2[i]
      
        }

    }else{
        console.log("No tiene los mismos")
    }
    return veResta;
    

}
console.log(restaVector(ve1,ve2) + " resta");



let veMult = [];

function productoVector(v1, v2){
    
    if(v1.length == v2.length){
        for (let i = 0; i<v1.length; i++){
            veMult[i] = v1[i] * v2[i]
      
        }

    }else{
        console.log("No tiene los mismos")
    }
    return veMult;
    

}
console.log(productoVector(ve1,ve2) + " multiplicacion");



let imprimir = (texto) => {console.log(texto)}

imprimir("Hola esto es con una funcion arrow")

let multiply = (n,m) => {console.log(n*m)}

multiply(4,2)

   