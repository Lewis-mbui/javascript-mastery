/*
Write an arrow function that filters an array of 
product objects to return only those that are in stock
*/

const products = [
  { name: "Laptop", inStock: true },
  { name: "Phone", inStock: false },
  { name: "Keyboard", inStock: true }
];

console.log(filterProducts(products));

function filterProducts(products) {
  return products.filter((product) => product.inStock === true);
}