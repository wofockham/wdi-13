var app = app || {};

$(document).ready(function () {

  app.secrets = new app.Secrets();
  app.secrets.fetch(); // Make a GET request to /secrets

  window.setInterval(function () {
    app.secrets.fetch();
  }, 4000);

  app.router = new app.AppRouter();
  Backbone.history.start();

});
