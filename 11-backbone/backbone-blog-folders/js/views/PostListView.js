var app = app || {};

app.PostListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'showPost'
  },
  render: function () {
    this.$el.text( this.model.get('title') );
    this.$el.appendTo('#posts');
  },
  showPost: function () {
    router.navigate('posts/' + this.model.get('id'), true);
  }
});
