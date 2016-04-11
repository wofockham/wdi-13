var app = app || {};

// ActiveRecord style collection of our model
app.Posts = Backbone.Collection.extend({
  model: app.Post
});
