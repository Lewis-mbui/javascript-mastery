// Create an object to represent a book with 
// properties: title, author, and year.

// Access and log the title.

// Update the year property.

// Add a new property genre.

const book = {
  title: "The Kindred's Curse",
  author: "Some lady",
  year: "2023"
};

console.log(book.title);
book['year'] = "2022";
book.genre = "Fantasy"

console.log(book);