 //SIN USAR LOS PARAMETOS DEL CONSTRUCTOR
//class Poligono 
//   {
//     constructor()
//            {
//                this.altura
//                this.ancho
//                this.lado
//            }

//    }
//    let cuadrado =new Poligono();
//    cuadrado.altura = 20;
//    cuadrado.ancho = 20;
//    cuadrado.lado = 8

//    console.log(cuadrado);


    class Poligono 
    {
        constructor(altura, ancho)
            {
                this.altura = altura
                this.ancho = ancho
                this.lado = 4;
            }

        printAltura()
            {
                console.log(this.altura)
            }

        calcArea()
            {
                console.log(this.altura * this.ancho); 
            }

            

    }


    //USANDO EL CONSTRUCTOR PARA LOS PARAMETROS
    let cuadrado = new Poligono(20,20);
   

    console.log(cuadrado);
    cuadrado.printAltura()
    cuadrado.calcArea()
