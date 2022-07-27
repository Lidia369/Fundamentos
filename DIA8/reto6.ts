import { Book } from "./reto4";

export class Library 
{
    private books: Book[]
    private address: string;
    private manager: string;

    constructor(books:Book[], address:string, manager:string)
        {
            this.books = books
            this.address = address
            this.manager = manager
        }

    public getAddress():string
        {
            return this.address

        }

    public getManager():string
        {
            return this.manager

        }   

    public setAddress(address:string)
        {
            this.address = address
        }

    public setManager(manager:string)
        {
            this.manager = manager
        }

    public toString():string
        {
            let titulos:string="";
            for (let i = 0; i<this.books.length;i++)
                {
                    titulos += "Book" + (i+1) + "\n" + this.books[i].toString() + "\n"
                }
            return titulos

        }
     
    public getNumberOfBooks():number
        {
            return this.books.length
        }

    public findByAuthor(author:string):Book[]
        {
            let authores:Book[]= []
            for(let i = 0 ; i< this.books.length; i++)
                {
                    if(this.books[i].getAuthor() == author)
                        {
                           authores.push(this.books[i])
                        }
                } 
            
            return authores
        }
}



