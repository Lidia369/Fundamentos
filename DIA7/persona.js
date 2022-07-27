 class Persona 
    { // Caracteristicas principales
        constructor () // <= semeten aqui los []?
            { //atributos y propiedades
                this.altura ;
                this.peso ;
                this.pelo ;
                this.ojos ;
                this.yearOfBirth ;
                this.hobbies = [];
                
            }

            calcularIMC()
            {
                return this.peso/(this.altura*this.altura)*10000;

            }

            edad()
            {
                return 2022 - this.yearOfBirth;
            }

            printAll()
            {
                console.log(this.altura, this.peso, this.pelo, this.ojos)
            }

            printHobbies()
            {
                console.log(this.hobbies) 


            }


    }

    module.exports = Persona