// Build a Library class that:

// Stores a list (array) of Book objects.

// Has methods:

// addBook(book) → adds a book.

// findBookByTitle(title) → returns a book if found.

// listBooks() → prints all book titles.

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} is a book written by ${this.author} in ${this.year}.`;
  }
}

class Library {
  constructor(books) {
    this.books = books;
  }

  addBook(book) {
    this.books.push(book);
  }

  findBookByTitle(title) {
    return this.books.find(book => book.title === title);
  }

  listBooks() {
    this.books.forEach(book => console.log(book.title));
  }
}

const book1 = new Book(`The Kindred's Curse`, 'Penn Cole', '2021');
const book2 = new Book(`The Great Gatsby`, `F. Scott Fitzgerald`, '1925');
const book3 = new Book(`The Da Vinci Code`, `Dan Brown`, '2009');
const book4 = new Book(`The Things They Carried`, `Tim O'Brien`, '1979');
const book5 = new Book(`All The Sinners Bleed`, `S.A. Cosby`, '2025');

const myBooks = [book1, book2, book3, book4];

const myLib = new Library(myBooks);