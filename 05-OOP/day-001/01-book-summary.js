// Create a class Book with:

// Properties: title, author, year.

// A method getSummary() that returns a string summarizing the book.
// 👉 Practice: Instantiate at least two books and call getSummary().

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

const book1 = new Book(`The Kindred's Curse`, 'Penn Cole', '2021');
console.log(book1.getSummary());

const book2 = new Book(`The Great Gatsby`, `F. Scott Fitzgerald`, '1925');
console.log(book2.getSummary());