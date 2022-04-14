let booksContainer = document.querySelector(".books-container");

let myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.changeTitle = function (newTitle) {
    this.title = newTitle;
  };
}
function addBook(book) {
  //   let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  console.log(`Added ${book.title} to the list`);
}

function createBookElement(book) {
  let bookDiv = document.createElement("div");
  let bookTitle = document.createElement("h1");
  let bookAuthor = document.createElement("p");
  let bookPages = document.createElement("p");
  let bookStatus = document.createElement("p");

  bookDiv.classList.add("book-card");
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = `Pages: ${book.pages}`;
  bookStatus.textContent = book.read ? "Read" : "Not read yet.";

  bookDiv.appendChild(bookTitle);
  bookDiv.appendChild(bookAuthor);
  bookDiv.appendChild(bookPages);
  bookDiv.appendChild(bookStatus);

  return bookDiv;
}

function displayBooks() {
  console.log("Library: ", myLibrary);

  myLibrary.forEach((book) => {
    // Create element
    let bookDiv = createBookElement(book);
    // Append it to booksContainer
    booksContainer.appendChild(bookDiv);
  });
}

// On "Add Book" button click
let book = new Book("Title", "Author", 235, false);
addBook(book);

myLibrary[0].changeTitle("New Title");

displayBooks();
