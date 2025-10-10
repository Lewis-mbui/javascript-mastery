/*
Create an object userProfile with nested details

Log the user’s email.

Update the city.

Add a new nested property address.country.
*/

const userProfile = {
  name: "John",
  contact: { email: "john@example.com", phone: "123456789" },
  address: { city: "Mombasa", zip: "00100"}
};

console.log(userProfile.contact.email);
userProfile.address.city = 'Nyeri';
console.log(userProfile);
userProfile.address.country = 'Kenya';
// console.log(userProfile);
userProfile.occupation = 'doctor';