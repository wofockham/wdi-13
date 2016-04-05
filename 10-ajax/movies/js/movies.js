$(document).ready(function () {

  $('#movie-lookup').on('submit', function (event) {

    event.preventDefault(); // Don't let the browser submit the form for us.

    var movieTitle = $('#movie-title').val();
    var movieURL = 'http://omdbapi.com/?t=' + movieTitle;

    $.ajax(movieURL, {
      success: function (data) {
        var $image = $('<img>', {src: data.Poster});
        $('#result').html($image);
      }
    });
  });

});
