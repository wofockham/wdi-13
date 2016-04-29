$(document).ready(function () {

  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    $('body').css('background-position-y', -scrollTop / 5);
  });

});
