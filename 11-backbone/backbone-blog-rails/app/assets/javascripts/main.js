_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};

var posts = new app.Posts();
var router = new app.Router();

$(document).ready(function () {
  posts.fetch().done(function () {
    Backbone.history.start(); // Starts the router and pays attention to changes in the URL.
  });
});
