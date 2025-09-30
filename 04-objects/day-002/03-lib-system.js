// Create a library system:

// Each book is an object with title, author, and 
// available (boolean).

// Store multiple books inside a library object 
// where keys are book IDs (book1, book2, ...)

// Add methods:

// listAvailableBooks → returns all available books.

// borrowBook(id) → marks a book as unavailable if it 
// exists and is available.

// returnBook(id) → marks a book as available again.

const library = {
  book1: {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    available: true
  },
  book2: {
    title: "1984",
    author: "George Orwell",
    available: false
  },
  book3: {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    available: true
  },
  book4: {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    available: true
  },
  book5: {
    title: "Moby Dick",
    author: "Herman Melville",
    available: false
  },

  listAvailableBooks() {
    console.log('Available books: ');
    for (let key in this) {
      if (this[key].available === true)
        console.log(`${key}: ${this[key].title}`);
    }
  },

  borrowBook(id) {
    if (!(id in this)) console.log('Invalid book ID');
    else if (this[id].available === false)
      console.log('Book is already borrowed');
    else {
    this[id].available = false;
    console.log(`"${this[id].title}" borrowed successfuly!! Have a good read:)`);
    }
  },

  returnBook(id) {
    if (!(id in this)) console.log('Invalid book ID');
    else if (this[id].available === false) {
      this[id].available = true;
      console.log('Book returned successfully:)');
    }
    else
    console.log('Cannot return a book that was not borrowed');
  }
};

// library.listAvailableBooks();
// library.borrowBook('book1');
// library.borrowBook('book1');
// library.borrowBook('book9');
