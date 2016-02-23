/*

The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

*/

var age = 17;
var maxAge = 35;
var numberPerDay = 3;

var yearsRemaining = maxAge - age;
var amountPerYear = numberPerDay * 365.25;

var amountRequired = amountPerYear * yearsRemaining;

var message = "You will need " + amountRequired + " to last until the ripe old age of " + maxAge;

console.log(message);
