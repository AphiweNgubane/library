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

const newBookbtn = document.getElementById("new-book-btn");
const bookForm = document.getElementById("book-form");
const cancelBtn = document.getElementById("cancel-btn");

newBookbtn.addEventListener("click", () => {
  bookForm.classList.remove("hidden");
});

cancelBtn.addEventListener("click", () => {
  bookForm.classList.add("hidden");
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);

  bookForm.reset();

  bookForm.classList.add("hidden");
});

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("1984", "Goerge Orwell", 328, true);

console.log(myLibrary);