class Persona 
    { // Caracteristicas principales
        constructor (altura,peso,pelo,ojos)
            { //atributos y propiedades
                this.altura = altura;
                this.peso =  peso;
                this.pelo = pelo
                this.ojos = ojos
                
            }

            printAll()
            {
                console.log(this.altura, this.peso, this.pelo, this.ojos)


            }
        }

let arturo = new Persona(180,79,"negro","oscuros");

arturo.printAll();