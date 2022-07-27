import { Mobile } from "./mobile";


let Readmi = new Mobile("Redmi","6","Redmi", "4Gb", "Negro", false, 2, 150);
let iPhone  = new Mobile("iPhone", "3G", "Apple", "8GB", "Blanco", false, 1, 1000);
let xiaomi = new Mobile("Xiaomi", "Pro 10", "Xiaomi", "64GB", "Blanco", true, 3, 250);

console.log(Readmi);
Readmi.printAll();
console.log(iPhone);
iPhone.printAll();
console.log(xiaomi);
xiaomi.printAll();
Readmi.printAll();
Readmi.printCarac();
iPhone.printCarac();
xiaomi.printCarac();