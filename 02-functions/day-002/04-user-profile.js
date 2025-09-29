// Write a function that:

// Accepts a user object with { name, age, hobbies }.

// Uses default parameters if any property is missing 
// (name = "Unknown", age = 0, hobbies = []).

// Accepts extra hobbies via rest parameters.

// Returns a string summary e.g.: 
// "Alice (25 years old) enjoys: reading, gaming, traveling"

const user = { 
  name: "Alice", 
  age: 24, 
  hobbies: ["reading"]
};

console.log(createUserProfile(user, "gaming", "travelling"));

function createUserProfile({ name = "Unknown", age = 0, hobbies = []}, ...moreHobbies) {
  const allHobbies = hobbies.concat(moreHobbies);
  
  return `${name} (${age} years old) enjoys: ${allHobbies.join(', ')}`;
}