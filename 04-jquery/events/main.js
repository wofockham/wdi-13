$("p").on("click", function (event) {
  console.log( event );
});

$("a").on("click", function (event) {
  event.preventDefault();
  console.log( event );
});

// $(window).on("mousemove", function (event) {
//   console.log( event.clientX, event.clientY );
// });

// $("img").on("click", function (event) {
//   $(this).fadeOut(2000);
// });

$(document).on("click", "img", function (event) {
  $(this).fadeOut(2000);
});

var $newImage = $("<img>");
$newImage.attr("src", "http://fillmurray.com/300/300");

$("body").prepend( $newImage );
