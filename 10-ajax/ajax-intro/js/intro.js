// This creates a new object we can use to make an AJAX request.
var request = new XMLHttpRequest();

// Here we set a callback to fire each time the "readyState" changes.
request.onreadystatechange = function () {

  // We can ignore all the readyStates less than 4 because
  // in those states the request hasn't finished yet.
  if (request.readyState !== 4) {
    return;
  }

  // At this point the readyState must have reached 4,
  // so we can access and use the request.responseText.
  var content = document.getElementById('content');
  content.innerHTML = request.responseText;
};

// With our callback set up, we can fire off our request.
request.open('GET', 'http://omdbapi.com/?t=alien');
request.send();
