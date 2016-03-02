var body = document.getElementsByTagName('body')[0];

body.style.fontFamily = 'Arial, sans-serif';

// Preferred way:
var nickname = document.getElementById('nickname');
nickname.innerHTML = 'Biggsy';

// This is just to show what's possible, I don't think this is a good way:
document.getElementById('favorites').innerHTML = 'Marx Brothers and JS';
document.getElementById('hometown').innerHTML = 'Sydney';

var items = document.getElementsByTagName('li');
for (var i = 0; i < items.length; i++) {
  items[i].className = 'listitem';
}

// body.innerHTML += '<img src="http://fillmurray.com/500/500">';
var bill = document.createElement('img');
bill.src = 'http://fillmurray.com/800/800';
body.appendChild(bill);
