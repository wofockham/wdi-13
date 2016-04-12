var app = app || {};

app.AppView = Backbone.View.extend({

  el: "#main", // this.el, this.$el

  render: function () {
    var appViewTemplate = $("#appViewTemplate").html();
    this.$el.html( appViewTemplate );

    var secretInputView = new app.SecretInputView();
    secretInputView.render();
  }

});
