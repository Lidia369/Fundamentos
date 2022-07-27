function arcoiris(colores) {
    {
        var arco = ["Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Violeta"];
        var color = true;
        for (var i = 0; i < arco.length; i++) {
            if (arco[i] == colores) {
                console.log(color = true);
            }
            else {
                console.log(color = false);
            }
        }
    }
}
//"Rojo", "Naranja", "Amarillo", "Verde", "Azul","Violeta" 
arcoiris("Naranja");
