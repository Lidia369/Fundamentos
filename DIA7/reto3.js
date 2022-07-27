class Persona 
    { // Caracteristicas principales
        constructor (yearOfBirth)
            { //atributos y propiedades
                this.altura;
                this.peso; 
                this.pelo; 
                this.ojos; 
                this.yearOfBirth = yearOfBirth ;

            }

            edad(year)
            {
                return year - this.yearOfBirth;
            }
        }
let victor = new Persona(2007)

console.log(victor.edad(2021));