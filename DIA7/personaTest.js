 let Persona = require('./persona')

let sonia = new Persona()
sonia.altura = 170;
sonia.peso = 65;
sonia.ojos = "Marrones"
sonia.pelo = "Castaño";
sonia.yearOfBirth = 2001;
sonia.hobbies = ["dormir", "comer", "leer"];

console.log(sonia.calcularIMC());
console.log(sonia.edad(2021));
sonia.printAll();
sonia.printHobbies();


