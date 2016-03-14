var body = document.getElementsByTagName('body')[0];

var mouseLogger = function (event) {
  console.log('x:', event.clientX, 'y:', event.clientY);
};

body.addEventListener('mousemove', mouseLogger);

// Mad Lib stuff
var button = document.getElementById('lib-button');
var storyDiv = document.getElementById('story');
var noun = document.getElementById('noun');
var adjective = document.getElementById('adjective');
var person = document.getElementById('person');

var makeMadLib = function () {
  var story = [
    person.value,
    'really likes',
    adjective.value,
    noun.value
  ].join(' ');

  storyDiv.innerHTML = '<p>' + story + '</p>';
};

button.addEventListener('click', makeMadLib);
