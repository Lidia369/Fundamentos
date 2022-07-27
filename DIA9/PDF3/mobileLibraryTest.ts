import { Mobile } from "../PDF2/mobile";
import { MobileLibrary } from "./mobileLibrary";


let Redmi = new Mobile("Redmi", "6", "Redmi", "4Gb", "Negro", false, 2, 150);
let iPhone = new Mobile("iPhone", "3G", "Apple", "8GB", "Blanco", false, 1, 1000);
let xiaomi = new Mobile("Xiaomi", "Pro 10", "Xiaomi", "64GB", "Blanco", true, 3, 250);

let arrayNum:Mobile[] = [];
arrayNum.push(Redmi, iPhone,xiaomi);

let libreria = new MobileLibrary("Libería 1", "Primero", arrayNum,);

libreria.printLibrary()