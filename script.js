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
//testing
addBookToLibrary("J.K. Rowling", "Harry potter", 210, "read");
addBookToLibrary("Marry Shelly", "Frankenstein", 130, "not read");
addBookToLibrary("Suzanne Collins", "The Hunger Games", 320, "read");
console.log(myLibrary);
//testing



function displayBook(book) {
    const display = document.querySelector(".display");    //select display div from html
    const fragment = document.createDocumentFragment();    //Use fragment to add multiple childs to a parent in one go

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

    const buttonsContainer = document.createElement("div");
    const deleteButton = document.createElement("button");
    const readToggleButton = document.createElement("button");

    deleteButton.innerHTML = 'Delete';
    readToggleButton.innerHTML = 'Status';

    buttonsContainer.className = 'buttonsDiv';
    deleteButton.className = 'delete';
    readToggleButton.className = 'toggle';

    buttonsContainer.appendChild(readToggleButton);
    buttonsContainer.appendChild(deleteButton);

    fragment.append(buttonsContainer);

    card.appendChild(fragment);
    display.appendChild(card);


}

function displayBooks() {
    const display = document.querySelector(".display");
    display.innerHTML = '';                                //clear any elements from before
    myLibrary.forEach(displayBook)
}

//testing
displayBooks();
//testing

//dialog

const showDialog = document.querySelector(".showDialog");
const dialog = document.querySelector("dialog");
const cancel = document.querySelector(".cancel");
const form = document.querySelector("form");

showDialog.addEventListener("click", () => {
    dialog.showModal()
});

cancel.addEventListener("click", () => {
    dialog.close();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    const author = document.querySelector("#author").value.trim();
    const title = document.querySelector("#title").value.trim();
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value.trim();

    addBookToLibrary(author, title, pages, read);
    displayBooks();
    dialog.close();
    form.reset();
});

//read/unread button

const display = document.querySelector(".display");

display.addEventListener("click", (e) => {
    if(e.target.classList.contains("toggle")) {
        const card = e.target.closest(".card");
        const bookID = card.dataset.id;
        const book = myLibrary.find((b) => b.id === bookID);

        if (!book) return;

        book.read = book.read === "read" ? "not read": "read";
        const read = card.querySelector(".read");
        read.innerHTML = book.read;
    } else if(e.target.classList.contains("delete")) {
        const card = e.target.closest(".card");
        const bookID = card.dataset.id;
        const index = myLibrary.findIndex((b) => b.id === bookID);
        if(index!==-1) {
            myLibrary.splice(index, 1);
        }
        displayBooks();
    }
    
});










