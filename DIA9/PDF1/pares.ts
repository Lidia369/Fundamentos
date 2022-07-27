



 function impar(numero:number):void {
    let numerosImpares:number = 0;
    for(let i = 0; i <= numero; i++){
        if(i % 2 !==0){
            numerosImpares = i
            console.log(numerosImpares);
        }
    }
}

impar(9);

