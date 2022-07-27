import { Person } from "./reto1";

export class Contacts 
    {
        public people : Person[]


        constructor()
            {
                this.people = []

            }   

        public printCalendar():void
            {
                console.log(this.people);
                
            }
    }