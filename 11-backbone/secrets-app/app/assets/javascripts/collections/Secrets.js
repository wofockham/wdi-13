var app = app || {};

app.Secrets = Backbone.Collection.extend({
  url: "/secrets", // Where do I make an AJAX request to?
  model: app.Secret, // If you found data, create a new app.Secret with the information
  initialize: function () {
    this.on("add", function (secret) {
      var secretView = new app.SecretView({
        model: secret
      });
      secretView.render();
    });
  }
});
