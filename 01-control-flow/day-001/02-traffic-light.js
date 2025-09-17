/*
Create a program that simulates a traffic light.

If the light is "green", print "Go".

If "yellow", print "Slow down".

If "red", print "Stop".

If the input doesn’t match any of these, print "Invalid color"
*/

const color = 'yellow';
console.log(displayTrafficInstruction(color));


function displayTrafficInstruction(color) {
  if (color === 'green') return "Go";
  if (color === 'yellow') return "Slow down";
  if (color === 'red') return "Stop";
  return "Invalid Color";
}