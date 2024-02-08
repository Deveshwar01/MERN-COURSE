// Book Object
function Book(id, title, author) {
    return {
      id: id,
      title: title,
      author: author,
      isBorrowed: false
    };
  }
  
  // Library Array
  let library = [];
  
  // Adding Books
  function addBook(id, title, author) {
    const newBook = Book(id, title, author);
    library.push(newBook);
  }
  
  // Dummy Books
  addBook(1, "The Great Gatsby", "F. Scott Fitzgerald");
  addBook(2, "To Kill a Mockingbird", "Harper Lee");
  addBook(3, "1984", "George Orwell");
  addBook(4, "The Catcher in the Rye", "J.D. Salinger");
  addBook(5, "The Hobbit", "J.R.R. Tolkien");
  
  // Borrowing Books
  function borrowBook(id) {
    const book = library.find(book => book.id === id);
    if (book) {
      if (!book.isBorrowed) {
        book.isBorrowed = true;
        return `${book.title} by ${book.author} has been borrowed.`;
      } else {
        return `${book.title} by ${book.author} is already borrowed.`;
      }
    } else {
      return `Book with ID ${id} not found.`;
    }
  }
  
  // List Available Books
  function listAvailableBooks() {
    let availableBooks = "Available Books:\n";
    library.forEach(book => {
      if (!book.isBorrowed) {
        availableBooks += `${book.title} by ${book.author}\n`;
      }
    });
    return availableBooks.trim();
  }
  
  // Search for a Book
  function searchBook(title) {
    const foundBook = library.find(book => book.title.toLowerCase() === title.toLowerCase());
    return foundBook || null;
  }
  
  // Display Available Books
  function displayAvailableBooks() {
    const outputElement = document.getElementById("output");
    const availableBooks = listAvailableBooks();
    outputElement.textContent = availableBooks;
  }
  
  // Search and Display Book
  function searchAndDisplayBook() {
    const outputElement = document.getElementById("output");
    const searchInput = document.getElementById("searchInput").value;
    const foundBook = searchBook(searchInput);
    if (foundBook) {
      outputElement.textContent = `Book found: ${foundBook.title} by ${foundBook.author}`;
    } else {
      outputElement.textContent = "Book not found.";
    }
  }
  