function revertido(array:string[]):string[]{
    let revertir:string[]=[];
    for(let i = array.length - 1; i >= 0; i--){
        revertir.push(array[i])
    }
    return revertir
}

console.log(revertido(["Hola", "Qué tal", "Hola", "Gracias"]));