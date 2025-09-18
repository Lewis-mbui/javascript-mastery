// Build a small inventory system.

// Create an object inventory with a nested object 
// for each item (e.g., apples, bananas) containing 
// quantity and price.

// Write a method getTotalValue that returns the 
// total value of all items (quantity * price).

// Add a method addItem that increases the quantity 
// of a given item.

// Test it by simulating adding/removing stock.

function Inventory(items) {
  this.items = items;
  this.getTotalValue = function() {
    return this.items.reduce((prev, item) => 
        prev += item.quantity * item.price, 0);
  }
}

const fruitsInventory = new Inventory(
  [
    {name: 'mangoes', quantity: 3, price: 10},
    {name: 'apples', quantity: 6, price: 30},
    {name: 'oranges', quantity: 8, price: 10},
    {name: 'pinapples', quantity: 2, price: 100},
  ]
);