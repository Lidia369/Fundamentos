class Persona 
    { // Caracteristicas principales
        constructor (altura,peso)
            { //atributos y propiedades
                this.altura = altura;
                this.peso =  peso;
                this.pelo;
                this.ojos;
               
                
            }

        calcularIMC()
            {
                return this.peso/(this.altura*this.altura)*10000;
            }
    }

let maria = new Persona(170,65);
let dani = new Persona(180,80);

console.log(maria.calcularIMC())
console.log(dani.calcularIMC())

 