function impar(numero) {
    var numerosImpares = 0;
    for (var i = 0; i <= numero; i++) {
        if (i % 2 !== 0) {
            numerosImpares = i;
            console.log(numerosImpares);
        }
    }
}
impar(9);
