/*

The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:

takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

var calculateSupply = function (age, numberPerDay) {
  var maxAge = 35;

  var yearsRemaining = maxAge - age;
  var amountPerYear = numberPerDay * 365.25;

  var amountRequired = amountPerYear * yearsRemaining;

  var message = "You will need " + amountRequired.toFixed(0) + " to last until the ripe old age of " + maxAge;

  console.log(message);
};

calculateSupply(17, 3);
