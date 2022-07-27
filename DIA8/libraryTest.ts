import { Book } from "./reto4";
import { Library } from "./reto6";


let libro1 = new Book ("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions") 
let libro2 = new Book ("Los pitufos", 233, "2344433-BC23333", "Pitufo escritor", "Now Editions")

let biblioteca = new Library ([libro1, libro2], "Mi casa","Nose que poner")

console.log(biblioteca);

console.log(biblioteca.toString());

console.log(biblioteca.getNumberOfBooks());

console.log((biblioteca.findByAuthor("Joseph Smith")));