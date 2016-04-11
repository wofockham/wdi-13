_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};

var posts = new app.Posts();
var router = new app.Router();

$(document).ready(function () {

  // Don't start Backbone on non-Backbone pages
  if ($('#main').length === 0) {
    return;
  }

  posts.fetch().done(function () {
    Backbone.history.start(); // Starts the router and pays attention to changes in the URL.
  });
});
