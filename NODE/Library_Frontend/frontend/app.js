

/*i also attached a image of my frontend how it look like do cheak it out*/

const bookForm = document.querySelector('#addBookForm')
bookForm.addEventListener('submit', async function (event) {

    event.preventDefault();   /* by defalut our form nature is submit with this we are changing its nature */

    const id = document.getElementById('id').value;
    const bookName = document.getElementById('title').value;
    const authorName = document.getElementById('author').value;

    /* here we are calling our addBook function which defined in our backend route */
    await fetch('http://localhost:4000/api/addBook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, bookName, authorName }),
    });

    // Clear form fields if we do not clear form fields value will remain in our input filed
    document.getElementById('id').value = '';
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';

    // Refresh book display it helps us to see added book instant no page reload is required
    displayBooks();
});


// Function to fetch and display all  books 
async function displayBooks() {
    try {
        /* api call for display books */
        const response = await fetch('http://localhost:4000/api/allbooks');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();

        // Check if the response data has a "data" property and it is an array
        if (!responseData.data || !Array.isArray(responseData.data)) {
            throw new Error('Invalid response format. Expected a "data" property containing an array.');
        }


        const books = responseData.data; /* Here we are creating a variable in which we are holding our books data and then further looping it and displaying it */

        const tableBody = document.querySelector('#bookTable tbody');
        tableBody.innerHTML = '';

        books.forEach(book => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${book.id}</td>
                <td>${book.bookName}</td>
                <td>${book.authorName}</td>
                <td>${book.isBorrowed ? 'Borrowed' : 'Available'}</td>
                <td>
                    <button class="borrow-btn" onclick={borrowBook(${book.id})} data-id="${book.id}">Borrow</button>
                    <button class="return-btn" onclick={returnBook(${book.id})} data-id="${book.id}">Return</button>
                    <button class="update-btn" onclick={updateBook(${book.id})} data-id="${book.id}">Update</button>
                    <button class="delete-btn" onclick={deleteBook(${book.id})} data-id="${book.id}">Delete</button>
                </td>
            `;


            tableBody.appendChild(row); /* appending all elements into our created field */
        });
    } catch (error) {
        console.error('Error fetching or processing books:', error.message);
    }
}
displayBooks();


// Function to borrow a book
async function borrowBook(bookId) {
    try {
        const response = await fetch(`http://localhost:4000/api/borrowBook/${bookId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Refresh book display after borrowing
        displayBooks();
    } catch (error) {
        console.error('Error borrowing book:', error.message);
    }
}

//  Function to borrow a book
async function returnBook(bookId) {
    try {
        const response = await fetch(`http://localhost:4000/api/return/${bookId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Refresh book display after returning
        displayBooks();
    } catch (error) {
        console.error('Error returning book:', error.message);
    }
}

// Function to delete a book
async function deleteBook(id) {
    try {
        const response = await fetch(`http://localhost:4000/api/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }

        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        displayBooks();
    } catch (error) {
        console.error('Error while deleting book:', error.message);
    }

}

//  function to update book
async function updateBook(id) {
    try {

        const bookName = prompt("Enter updated book name:");
        const authorName = prompt("Enter updated author name:");

        const response = await fetch(`http://localhost:4000/api/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bookName, authorName }),

        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        displayBooks();
    } catch (error) {
        console.error('Error while updating book:', error.message);
        console.error('Response content:', await response.text());
    }
}


