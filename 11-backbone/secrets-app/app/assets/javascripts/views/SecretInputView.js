var app = app || {};

app.SecretInputView = Backbone.View.extend({
  events: {
    'click button' : 'createSecret',
    'keypress textarea' : 'checkForEnter'
  },

  el: "#secretForm",

  checkForEnter: function (event) {
    var ENTER_KEY = 13;
    // They pressed enter and they weren't holding the Shift key
    if (event.which === ENTER_KEY && !event.shiftKey) {
      event.preventDefault();
      this.createSecret();
    }
  },

  createSecret: function () {
    var secret = new app.Secret();
    var userContent = this.$el.find("#secretContent").val();
    secret.set({
      content: userContent
    });
    secret.save(); // Saves it to the server - POST /secrets
    app.secrets.add( secret );
    this.$el.find("#secretContent").val('').focus();
  },

  render: function () {
    var secretInputViewTemplate = $("#secretInputViewTemplate").html();
    this.$el.html( secretInputViewTemplate );
  }

});
