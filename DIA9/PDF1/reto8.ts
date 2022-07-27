
function sumaLetras(todo:string[]):number{
    let total:number = 0;
    for(let i = 0; i < todo.length; i++){
        total +=todo[i].length
    }
    return total
}

console.log(sumaLetras(["Lidia", "Daniel", "Diego", "Arturo", "Sofia"]));