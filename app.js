let booksContainer = document.querySelector(".books-container");
let titleInput = document.querySelector("#input-title");
let authorInput = document.querySelector("#input-author");
let pagesInput = document.querySelector("#input-pages");
let readInput = document.querySelector("#input-read");
let submitButton = document.querySelector("#input-submit");

let myLibrary = [];
function Book(title, author, pages, read) {
  this.id = Math.random();
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
  let removeButton = document.createElement("button");

  bookDiv.classList.add("book-card");
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = `Pages: ${book.pages}`;
  bookStatus.textContent = book.read ? "Read" : "Not read yet.";
  removeButton.textContent = "Remove";

  removeButton.addEventListener("click", () => removeBook(book));

  bookDiv.appendChild(bookTitle);
  bookDiv.appendChild(bookAuthor);
  bookDiv.appendChild(bookPages);
  bookDiv.appendChild(bookStatus);
  bookDiv.appendChild(removeButton);

  return bookDiv;
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  let title = titleInput.value;
  let author = authorInput.value;
  let pages = pagesInput.value;
  let read = readInput.checked;

  if (!title || !author || !pages) {
    alert("Please fill in all the fields.");
    return;
  }

  let book = new Book(title, author, pages, read);
  addBook(book);
  displayBooks();
});

function displayBooks() {
  console.log("Library: ", myLibrary);
  booksContainer.textContent = "";
  myLibrary.forEach((book) => {
    // Create element
    let bookDiv = createBookElement(book);
    // Append it to booksContainer
    booksContainer.appendChild(bookDiv);
  });
}

function removeBook(book) {
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].id == book.id) {
      myLibrary.splice(i, 1);
      break;
    }
  }
  displayBooks();
}

displayBooks();
