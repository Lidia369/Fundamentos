
class Persona 
    { // Caracteristicas principales
        constructor () // <= semeten aqui los []?
            { //atributos y propiedades
                this.altura ;
                this.peso;
                this.pelo;
                this.ojos;
                this.yearOfBirth ;
                this.hobbies =[];
                
            }

            printHobbies()
            {
                console.log(this.hobbies) 


            }

            

        
        }

let alicia = new Persona();
alicia.hobbies = ["dormir", "comer", "leer"];
console.log(alicia.hobbies); 
alicia.printHobbies();

// alicia.printHobbies();