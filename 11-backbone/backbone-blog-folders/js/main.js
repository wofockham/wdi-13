// Seeds.rb data
var posts = new app.Posts([
  new app.Post({
    id: 1,
    title: 'First Post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptates illo, incidunt velit fugit deleniti asperiores eos, sit exercitationem ad obcaecati, doloribus modi nulla sequi. Aliquam officiis cupiditate doloribus sint.'
  }),

  new app.Post({
    id: 2,
    title: 'Something About Startups',
    content: 'This startup got angel investment and you will not believe what happened next'
  })
]);

var router = new app.Router();

$(document).ready(function () {
  Backbone.history.start(); // Starts the router and pays attention to changes in the URL.
});
