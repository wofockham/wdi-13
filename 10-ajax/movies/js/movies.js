// Similar to (but not as good as) $(document).ready();
window.addEventListener('load', function () {

  var form = document.getElementById('movie-lookup');
  form.addEventListener('submit', function (event) {

    event.preventDefault(); // Don't let the browser submit the form for us.

    var movieTitle = document.getElementById('movie-title').value;
    var movieURL = 'http://omdbapi.com/?t=' + movieTitle;

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState !== 4) { return };

      var movieInfo = JSON.parse(request.responseText);

      var moviePoster = movieInfo.Poster;
      var image = document.createElement('img');
      image.src = moviePoster;
      document.getElementById('result').innerHTML = ''; // Clear the result
      document.getElementById('result').appendChild(image);

    };
    request.open('GET', movieURL);
    request.send();

  });

});
