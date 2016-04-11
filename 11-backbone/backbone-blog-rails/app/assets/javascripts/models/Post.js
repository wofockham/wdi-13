var app = app || {};

// Essentially your rails Post.rb model
app.Post = Backbone.Model.extend({
  urlRoot: '/posts',
  defaults: {
    author: 'Anonymous',
    title: 'Untitled',
    content: ''
  }
});
