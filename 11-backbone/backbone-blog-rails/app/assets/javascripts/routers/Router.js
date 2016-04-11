var app = app || {};

// Like your routes.rb, it connects URLs or paths with particular functions
app.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'show',
    ':default': 'goHome'
  },
  index: function () {
    var appView = new app.AppView({collection: posts});
    appView.render();
  },
  show: function (id) {
    var post = posts.get(id);
    if (! post) {
      return router.navigate('', true);
    }
    var postView = new app.PostView({model: post});
    postView.render();
  },
  goHome: function () {
    router.navigate('', true);
  }
});
