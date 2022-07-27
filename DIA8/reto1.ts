export class Person
    {
        public name: string;
        public age: number;
        private addres: string;

        constructor (name:string, age:number, addres:string ) 
            {
                this.name = name;
                this.age = age;
                this.addres = addres;
            }

        public printName ():void
            {
               console.log(this.name);
               

            }

        public yearOfBirth(currentYear: number):number
            {
                return currentYear - this.age

            }   

        
        public getAddress (): void
        {
            console.log(this.addres);
                

        }

        public setAddress (addres:string)
            {
                this.addres = addres
                console.log(addres);
 
            }




    }


