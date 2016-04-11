var app = app || {};

// Essentially your rails Post.rb model
app.Post = Backbone.Model.extend({
  defaults: {
    author: 'Anonymous',
    title: 'Untitled',
    content: ''
  }
});
