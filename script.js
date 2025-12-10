const myLibrary = [];

function Book(author, title, pages, read) {
    this.id = crypto.randomUUID();
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
    myLibrary.push(new Book(author, title, pages, read));
}

addBookToLibrary("J.K. Rowling", "Harry potter", 210, "read");
addBookToLibrary("Marry Shelly", "Frankenstein", 130, "not read");
addBookToLibrary("Suzanne Collins", "The Hunger Games", 320, "read");
console.log(myLibrary);