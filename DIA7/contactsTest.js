
let Persona = require('./persona');

let sonia = new Persona();
let mario = new Persona();
let oscar = new Persona();

let Contacts = require('./contacts');

let agenda = new Contacts();
agenda = [sonia, mario, oscar]
console.log(agenda);