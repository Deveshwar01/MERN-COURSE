function getLibraryFromLocalStorage() {
  const storedLibrary = localStorage.getItem("library");
  return storedLibrary ? JSON.parse(storedLibrary) : [];
}

function updateLocalStorage(library) {
  localStorage.setItem("library", JSON.stringify(library));
}

const displayBooks = document.getElementById("output");
const addBookBtn = document.getElementById("addBook");
const searchBookBtn = document.getElementById("searchBook");
const searchOutput = document.getElementById("searchOutput");
const borrowInput = document.getElementById("borrowInput");
const borrowBookBtn = document.getElementById("borrowBook");
const returnBookBtn = document.getElementById("returnBook");
const borrowOutput = document.getElementById("borrowOutput");

let library = getLibraryFromLocalStorage();

function renderBooks() {
  let availableBooks = "<ul>";
  library.forEach((book) => {
    const status = book.isAlloted ? "Borrowed" : "Available";
    availableBooks += `<li>${book.bookName} by ${book.bookAuthor} - ${status}</li>`;
  });
  availableBooks += "</ul>";
  displayBooks.innerHTML = availableBooks;
}

function renderSearchResult(result) {
  searchOutput.textContent = result
    ? `Book found: ${result.bookName} by ${result.bookAuthor}`
    : "Book not found.";
}

function renderBorrowResult(book, action) {
  borrowOutput.textContent = book
    ? `Book ${action}: ${book.bookName} by ${book.bookAuthor}`
    : "Book not found.";
}

addBookBtn.addEventListener("click", function () {
  const bookNameInput = document.getElementById("bookName");
  const bookAuthorInput = document.getElementById("bookAuthor");

  const newBook = {
    bookName: bookNameInput.value.trim(),
    bookAuthor: bookAuthorInput.value.trim(),
    isAlloted: false,
  };

  if (newBook.bookName && newBook.bookAuthor) {
    library.push(newBook);
    updateLocalStorage(library);
    renderBooks();
  } else {
    alert("Please enter both book name and author.");
  }

  // Clear input fields after adding a book
  bookNameInput.value = "";
  bookAuthorInput.value = "";
});

searchBookBtn.addEventListener("click", function () {
  const searchInput = document.getElementById("searchInput");
  const searchTerm = searchInput.value.trim().toLowerCase();

  const foundBook = library.find(
    (book) => book.bookName.toLowerCase() === searchTerm
  );

  renderSearchResult(foundBook);
});

borrowBookBtn.addEventListener("click", function () {
  const borrowInputValue = borrowInput.value.trim().toLowerCase();
  const bookToBorrow = library.find(
    (book) =>
      book.bookName.toLowerCase() === borrowInputValue && !book.isAlloted
  );

  if (bookToBorrow) {
    bookToBorrow.isAlloted = true;
    updateLocalStorage(library);
    renderBooks();
    renderBorrowResult(bookToBorrow, "borrowed");
  } else {
    renderBorrowResult(null, "not found or already borrowed");
  }

  // Clear input field after borrowing a book
  borrowInput.value = "";
});

returnBookBtn.addEventListener("click", function () {
  const borrowInputValue = borrowInput.value.trim().toLowerCase();
  const bookToReturn = library.find(
    (book) => book.bookName.toLowerCase() === borrowInputValue && book.isAlloted
  );

  if (bookToReturn) {
    bookToReturn.isAlloted = false;
    updateLocalStorage(library);
    renderBooks();
    renderBorrowResult(bookToReturn, "returned");
  } else {
    renderBorrowResult(null, "not found or not borrowed");
  }

  // Clear input field after returning a book
  borrowInput.value = "";
});

// Initial rendering of books on page load
renderBooks();
