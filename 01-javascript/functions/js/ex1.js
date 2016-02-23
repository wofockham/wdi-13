/*

The Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:

takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.

*/

var tellFortune = function (numChildren, partnerName, geoLocation, jobTitle) {
  var biography = "You will be a " + jobTitle + " in " + geoLocation +
    ", and married to " + partnerName + " with " + numChildren + " kids";

  console.log(biography);
};

tellFortune(5, 'Wayne', 'Hawaii', 'garbage person');
tellFortune(0, 'nobody', 'No fixed address', 'unemployed');
tellFortune(2, 'Mary', 'Seattle', 'project manager');
tellFortune();
