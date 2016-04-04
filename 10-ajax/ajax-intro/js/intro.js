var request = new XMLHttpRequest();

request.onreadystatechange = function () {
  if (request.readyState !== 4) {
    return;
  }

  var content = document.getElementById('content');
  content.innerHTML = request.responseText;
};

request.open('GET', 'http://omdbapi.com/?t=alien');

request.send();
