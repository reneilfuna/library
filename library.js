const theLibrary = [];


function Book(title, author, pages, readYet) {
   // Book Constructor
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.readYet = readYet == true ? "read" : "not read";
   this.id = crypto.randomUUID();
   this.info = function(){
            console.log(`${this.title} by ${this.author}, ${this.pages} pages & ${this.read}`)
         }
}

function addBookToLibrary(title, author, pages, readYet){
   // Take params, create a book and store in array
   const bookToAdd = new Book(title, author, pages, readYet);
   theLibrary.push = bookToAdd;
}