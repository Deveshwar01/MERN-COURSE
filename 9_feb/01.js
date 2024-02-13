const displaybooks = document.querySelector("#books_available");

const searchBook = document.querySelector("#search_book");

let library = [];
const books = [
  {
    id: 1,
    bookName: "Wings of Fire",
    bookAuthor: "APJ Abdul Kalam",
    isAlloted: false,
  },
  {
    id: 2,
    bookName: "To Kill a Mockingbird",
    bookAuthor: "Harper Lee",
    isAlloted: true,
  },
  {
    id: 3,
    bookName: "The Great Gatsby",
    bookAuthor: "F. Scott Fitzgerald",
    isAlloted: false,
  },
  // Add more books as needed
];

/* library = library.concat(books);  this method uses concat methods */
/*library = [...library, ...books];  this method uses spread operator*/
library = [...library, ...books];

displaybooks.addEventListener("click", function () {
  const outputElement =
    document.getElementById("output"); /* this is our output block */
  let availableBooks = "";
  library.forEach((e) => {
    availableBooks += `${e.bookName} by ${e.bookAuthor}\n`;
  });
  outputElement.textContent = availableBooks;
});

// search book

searchBook.addEventListener("click", function () {
  const input = document.querySelector("#searchInput");
  const outputElement = document.getElementById("output");
  const searchTerm = input.value.toLowerCase();

  const foundBook = library.find(
    (e) => e.bookName.toLowerCase() === searchTerm
  );
  if (foundBook) {
    outputElement.textContent = `Book found: ${foundBook.bookName} by ${foundBook.bookAuthor}`;
  } else {
    // Display a message if the book is not found
    outputElement.textContent = "Book not found.";
  }
});
