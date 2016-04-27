var input = process.argv.slice(2);
var sum = input.reduce(function (i, sum) {
  return parseInt(i) + parseInt(sum);
});
console.log(sum)
