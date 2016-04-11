var app = app || {};

app.PostView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var postViewTemplate = $('#postViewTemplate').html();
    var postViewHTML = _.template( postViewTemplate );
    this.$el.html( postViewHTML( this.model.toJSON() )  );
  }
});
