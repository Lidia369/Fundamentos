export class Book
    {
        private title: string
        private nPages: number
        private isbn: string
        private author: string
        private editorial: string


        constructor (title:string, nPages: number, isbn: string, author: string, editorial: string)
            {
                this.title = title;
                this.nPages = nPages;
                this.isbn = isbn;
                this.author = author;
                this.editorial = editorial;

            }

        public getTitle():string
            {
                return this.title
            }
         
            public getnPages():number
            {
                return this.nPages
            }
            
            public getisbn():string
            {
                return this.isbn
            }

            public getAuthor():string
            {
                return this.author
            }

            public getEditoria():string
            {
                return this.editorial
            }

            public setTitle(title:string)
            {
                this.title = title
            }

            public setnPages(nPages:number)
            {
                this.nPages = nPages
            }

            public setIsbn(isbn:string)
            {
                this.isbn = isbn
            }

            public setAuthot(author:string)
            {
                this.author = author
            }

            public setEditorial(editorial:string)
            {
                this.editorial = editorial
            }

            public toString():string
            {
                return "Titulo - " + this.title + "\n" + "Numero de paginas - " + this.nPages + "\n" + "ISBN - " + this.isbn + "\n" + "Autor - " + this.author + "\n" + "Editorial - " + this.editorial;
            }


            


    }