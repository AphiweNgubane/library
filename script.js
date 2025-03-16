const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
      }
      this.id = crypto.randomUUID();
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    displayBooks();
}

function displayBooks() {
  const librayContainer = document.getElementById("library-container");

  librayContainer.innerHTML = ""

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Read:</strong> ${book.read ? "Yes" : "No"}</p>
        `;
    librayContainer.appendChild(bookCard);
  });
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("1984", "Goerge Orwell", 328, true);

console.log(myLibrary);