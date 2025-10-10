/*
Uses filter() to get products under $500.

Uses map() to extract their names.
*/

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 450 },
  { name: "Headphones", price: 150 }
];

const cheapProducts = products.filter((product) => product.price < 500)
  .map((product) => product.name);

console.log(cheapProducts);
