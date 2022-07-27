function zodiaco (d,m)
    {
        if (d < 22 && m == 3 || d < 21 && m == 4){

            console.log("Eres aries");

        }else if (d > 21 && m == 4  || d < 21 && m == 5) {

            console.log("Eres tauro");

        }else if (d > 21 && m == 5  || d < 21 && m == 6) {

            console.log("Eres geminis");

        }else if (d > 21 && m == 6 || d < 21 && m == 7) {

            console.log("Eres cancer");

        }else if (d > 21 && m == 7 || d < 23 && m == 8) {

                console.log("Eres leo");
       
        }else if (d > 23 && m == 8 || d < 23 && m == 9) {

            console.log("Eres virgo");

        }else if (d > 23 && m == 9 || d < 23 && m == 10) {

            console.log("Eres libra");

        }else if (d > 23 && m == 10 || d < 22 && m == 11) {

            console.log("Eres escorpio");
        
        }else if (d > 23 && m == 11 || d < 21 && m == 12) {

            console.log("Eres sagitario");
        
        }else if (d > 21 && m == 12 || d < 21 && m == 1) {

            console.log("Eres capricornio");
        
        }else if (d > 21 && m == 1 || d < 22 && m == 2) {

            console.log("Eres aquuario");
        
        }else if (d > 22 && m == 2 || d < 20 && m == 3) {

            console.log("Eres aquuario");
        }

    }

zodiaco(16,7);
zodiaco(16,5);
zodiaco(16,9);



