var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: { // config/routes.rb
    '' : 'index'
  },

  index: function () { // Controllers
    console.log( "Main Page has loaded" );
    var appView = new app.AppView();
    appView.render();
  }
});
