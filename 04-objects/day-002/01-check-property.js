// Create an object person with properties name, age, and city.

// Check if the object has a property called country.

// Add the property if it doesn’t exist.

// List all keys of the object.

const person = {
  name: 'Lewis',
  age: 24,
  city: 'Nairobi'
};

console.log(person);

if (!('country' in person)) person.country = 'Kenya';

console.log(person);

for (let key of Object.keys(person)) console.log(key);