var Post = Backbone.Model.extend({
  defaults: {
    author: 'Anonymous',
    title: 'Untitled',
    content: ''
  }
});

var Posts = Backbone.Collection.extend({
  model: Post
});

// Seed data
var posts = new Posts([
  new Post({
    id: 1,
    title: 'First Post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptates illo, incidunt velit fugit deleniti asperiores eos, sit exercitationem ad obcaecati, doloribus modi nulla sequi. Aliquam officiis cupiditate doloribus sint.'
  }),

  new Post({
    id: 2,
    title: 'Something About Startups',
    content: 'This startup got angel investment and you will not believe what happened next'
  })
]);

var AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var template = $('#appViewTemplate').html();
    this.$el.html(template);
    this.collection.each(function (p) {
      var postListView = new PostListView({model: p});
      postListView.render();
    });
  }
});

var PostListView = Backbone.View.extend({
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

var PostView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var postViewTemplate = $('#postViewTemplate').html();
    var postViewHTML = _.template( postViewTemplate );
    this.$el.html( postViewHTML( this.model.toJSON() )  );
  }
});

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'show'
  },
  index: function () {
    var appView = new AppView({collection: posts});
    appView.render();
  },
  show: function (id) {
    var post = posts.get(id);
    var postView = new PostView({model: post});
    postView.render();
  }
});

var router = new Router();

$(document).ready(function () {
  Backbone.history.start();
});
