/*
The Grade Assigner

Write a function named assignGrade that:

takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.
*/

var assignGrade = function (score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 50) {
    return 'D';
  } else {
    return 'F';
  }
};

console.log( assignGrade(100) );
console.log( assignGrade(85) );
console.log( assignGrade(75) );
console.log( assignGrade(50) );
console.log( assignGrade(15) );
