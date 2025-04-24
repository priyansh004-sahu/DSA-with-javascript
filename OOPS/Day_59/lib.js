
class Library{
    constructor() {
        this.books = []     
    }
    addBook(book) {
        this.books.push(...book)
    }
    listAllBooks() {
        this.books.forEach(function(book) {
            console.log(`${book.name} by ${book.author}`);           
        })
    }
}
class book{
    constructor(name, isbn, price, author) {
        this.name = name;
        this.isbn = isbn;
        this.name = name;
        this.author = author;
        this.readStatus = false;
    }
    info() {
        console.log(`${this.name} is written by ${this.author}, and you have ${this.readStatus ? "read it ✅" : "not read this book ❌"}. It is available on Amazon at the price of ${this.price}.`    
        );
        
    }
    changereadStatus() {
        this.readStatus = !this.readStatus;
    }
}
var jhansiLibrary = new Library();
var book1 = new book('Do Epic Shit', 3455, 500, 'nilkamal');
var book2 = new book('adventureous Life', 3455, 500, 'nilkamal')
var book3 = new book('Health is Wealth', 3455, 500, 'nilkamal')

jhansiLibrary.addBook([book1, book2, book3]);
jhansiLibrary.listAllBooks();