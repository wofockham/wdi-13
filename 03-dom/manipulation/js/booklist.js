var books = [{
  title: 'The Design of EveryDay Things',
  author: 'Don Norman',
  alreadyRead: false,
  cover: 'https://upload.wikimedia.org/wikipedia/en/3/33/The_Design_of_Everyday_Things_(cover_1988).jpg'
}, {
  title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true,
  cover: 'http://i.dailymail.co.uk/i/pix/2008/10/08/article-1073609-02F11C3D00000578-931_468x352.jpg'
}];

var body = document.getElementsByTagName('body')[0];
var ul = document.createElement('ul');

for (var i = 0; i < books.length; i++) {
  var p = document.createElement('p');
  p.innerText = books[i].title + ' by ' + books[i].author;
  if (books[i].alreadyRead === true) {
    p.className = 'alreadyRead';
  }
  var img = document.createElement('img');
  img.src = books[i].cover;

  p.appendChild(img);

  var li = document.createElement('li');
  li.appendChild(p);
  ul.appendChild(li);
}

body.appendChild(ul);
