$(document).ready(function () {

  // Easy parallax effect on CSS background images
  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    $('body').css('background-position-y', -scrollTop / 5);
  });

  // Random bubbles emerge from the mouse when it moves.
  $(window).on('mousemove', function (e) {
    var x = e.pageX;
    var y = e.pageY;
    var size = Math.random() * 6 + 'em';

    var $bubble = $('<div class="bubble"></div>').css({
      top: y,
      left: x,
      width: size,
      height: size
    }).appendTo('body');

    $bubble.delay(200).animate({top: -500}, 2000, function () {
      $bubble.remove();
    });

  });
});
