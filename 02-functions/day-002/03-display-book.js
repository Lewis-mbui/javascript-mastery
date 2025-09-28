// Write a function that takes a book object 
// { title, author, year } as a parameter and prints a 
// formatted string using destructuring.

const book = { 
  title: "1984", 
  author: "George Orwell", 
  year: 1949 
}

displayBook(book);

function displayBook({ title: bookTitle = 'No title', author: bookAuthor = 'No author', year: bookYear = 'No Year' }) {
  console.log(`${bookTitle} by ${bookAuthor} (${bookYear})`);
}