var Post = Backbone.Model.extend({
  defaults: {
    author: 'Anonymous',
    title: 'Untitled',
    content: ''
  }
});

var Posts = Backbone.Collection.extend({
  model: Post
});

// Seed data
var posts = new Posts([
  new Post({
    id: 1,
    title: 'First Post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptates illo, incidunt velit fugit deleniti asperiores eos, sit exercitationem ad obcaecati, doloribus modi nulla sequi. Aliquam officiis cupiditate doloribus sint.'
  }),

  new Post({
    id: 2,
    title: 'Something About Startups',
    content: 'This startup got angel investment and you will not believe what happened next'
  })
]);

var Router = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function () {
    console.log('Index page coming soon');
  }
});

var router = new Router();

$(document).ready(function () {
  Backbone.history.start();
});
