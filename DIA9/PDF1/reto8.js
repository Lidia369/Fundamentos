function sumaLetras(todo) {
    var total = 0;
    for (var i = 0; i < todo.length; i++) {
        total += todo[i].length;
    }
    return total;
}
console.log(sumaLetras(["Lidia", "Daniel", "Diego", "Arturo", "Sofia"]));
