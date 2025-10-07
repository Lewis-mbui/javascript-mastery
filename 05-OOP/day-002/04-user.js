// Build a User class with:

// Properties: username, private field #password.

// A setter for password that checks if the password is 
// at least 6 characters.

// A method checkPassword(input) to verify login attempts.
// This combines OOP with logic & validation.


// Create a WeakMap to hold private passwords
const _password = new WeakMap();

class User {
  constructor(username, password) {
    if (typeof password !== "string" || password.length < 6) {
      throw new Error("Password must be at least 6 characters long.");
    }

    this.username = username;
    _password.set(this, password); // store password privately
  }

  // Setter for updating password
  set password(newPassword) {
    if (typeof newPassword !== "string" || newPassword.length < 6) {
      console.log("Password must be at least 6 characters long.");
      return;
    }
    _password.set(this, newPassword);
  }

  // Getter (restricted)
  get password() {
    console.log("Access to password is restricted.");
    return undefined;
  }

  // Method to verify a login attempt
  checkPassword(input) {
    return _password.get(this) === input;
  }
}

try {
  const user1 = new User("Lewis", "123");
} catch (err) {
  console.log(err.message);
}

const user2 = new User("Lewis", "abc123");
console.log(user2.username);

user2.password = "12345";
user2.password = "SuperSecret!"; 

console.log(user2.checkPassword("wrong"));
console.log(user2.checkPassword("SuperSecret!")); 



/*

class User {
  #password;

  constructor(username, password) {
    if (typeof password !== "string" || password.length < 6) {
      throw new Error("Password must be at least 6 characters long.");
    }
    this.username = username;
    this.#password = password;
  }

  // Setter (for later updates)
  set password(newPassword) {
    if (typeof newPassword !== "string" || newPassword.length < 6) {
      console.log("Password must be at least 6 characters long.");
      return;
    }
    this.#password = newPassword;
  }

  // Getter (optional, restricted)
  get password() {
    console.log("Access to password is restricted.");
    return undefined;
  }

  // Check if the entered password is correct
  checkPassword(input) {
    return input === this.#password;
  }
}

try {
  const user1 = new User("Lewis", "123"); 
} catch (err) {
  console.log(err.message);
}

const user2 = new User("Lewis", "abc123");
console.log(user2.username);
console.log(user2.checkPassword("abc123"));
user2.password = "123";
user2.password = "myStrongPass";

*/