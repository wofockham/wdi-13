/*
The Geometrizer

Calculate properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".
*/

var radius = 47;

var circumference = 2 * radius * Math.PI;
console.log("The circumference is " + circumference);

var area = Math.PI * (radius * radius);
console.log("The area is " + area);
