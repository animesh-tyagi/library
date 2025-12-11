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

function displayBook(book) {
    const display = document.querySelector(".display");    //select display div from html
    const fragment = document.createDocumentFragment();

    const card = document.createElement("div");
    card.className = 'card';
    card.dataset.id = book.id;

    const author = document.createElement("p");
    author.className = 'author';
    author.innerHTML = `${book.author}`;
    fragment.append(author);

    const title = document.createElement("p");
    title.className = 'title';
    title.innerHTML = `${book.title}`;
    fragment.append(title);

    const pages = document.createElement("p");
    pages.className = 'pages';
    pages.innerHTML = `${book.pages}`;
    fragment.append(pages);

    const read = document.createElement("p");
    read.className = 'read';
    read.innerHTML = `${book.read}`;
    fragment.append(read);

    card.appendChild(fragment);
    display.appendChild(card);


}

function displayBooks() {
    const display = document.querySelector(".display");
    display.innerHTML = '';                                //clear any elements from before
    myLibrary.forEach(displayBook)
}

displayBooks();


