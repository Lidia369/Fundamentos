function revertido(array) {
    var revertir = [];
    for (var i = array.length - 1; i >= 0; i--) {
        revertir.push(array[i]);
    }
    return revertir;
}
console.log(revertido(["Hola", "Qué tal", "Hola", "Gracias"]));
