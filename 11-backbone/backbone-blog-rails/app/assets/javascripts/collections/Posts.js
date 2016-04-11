var app = app || {};

// ActiveRecord style collection of our model
app.Posts = Backbone.Collection.extend({
  url: '/posts',
  model: app.Post
});
