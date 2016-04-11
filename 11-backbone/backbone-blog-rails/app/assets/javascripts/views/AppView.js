var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main', // Selector to specify where this view should appear on the page
  render: function () {
    var template = $('#appViewTemplate').html();
    this.$el.html(template);
    this.collection.each(function (p) {
      var postListView = new app.PostListView({model: p});
      postListView.render();
    });
  }
});
