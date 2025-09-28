// Description: Create a function that greets a user. 
// If no name is provided, use "Guest".

const userName = 'Alice';
greetUser(userName);

function greetUser(userName = "Guest") {
  console.log(`Hello ${userName}`);
}