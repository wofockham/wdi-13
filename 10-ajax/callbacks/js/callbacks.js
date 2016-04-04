console.log('1. start of callbacks.js');


$(document).ready(function () {
  console.log('2. document is ready');
  $('h1').text('Hotdogs');

  var annoy = function () {
    alert('this is annoying');
  };

  $('h1').on('click', annoy);

  $('p').each(function () {
    console.log('within the each() callback');
    $(this).text(Math.random());
  });

});

console.log('3. later in callbacks.js');

var totals = [5, 6, 2, 7, 8];

// for (var i = 0; i < totals.length; i++) {
//   var num = totals[i];
//   console.log(num, '!!!');
// }

var each = function (a, callback) {
  for (var i = 0; i < a.length; i++) {
    var element = a[i];
    callback(element);
  }
};

var printer = function (n) {
  console.log(n, '!!!');
}

each(totals, printer);
each(totals, alert);
