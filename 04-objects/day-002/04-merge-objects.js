// Write a function mergeObjects(obj1, obj2) 
// that returns a new object containing all 
// properties from both.

// If a property exists in both, keep the value from obj2

const objA = { name: "Alice", age: 25, city: "Paris" };
const objB = { age: 30, country: "France" };
console.log(mergeObjects(objA, objB));

function mergeObjects(obj1, obj2) {
  return {...obj1, ...obj2};
}