import { Contacts } from "./contacts";
import { Person } from "./reto1";


let sofia = new Person("Sofia", 25,"Una calle")
let mario= new Person("mario", 25,"Una calle")
let elena = new Person("elena", 25,"Una calle")

let agenda = new Contacts ()
agenda.people = [sofia , mario, elena] ;

agenda.printCalendar();