let myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBook(book) {
  //   let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}
function displayBooks() {}
