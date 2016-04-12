var app = app || {};

app.Secret = Backbone.Model.extend({
  urlRoot: "/secrets",

  defaults: {
    content: ""
  }
});
