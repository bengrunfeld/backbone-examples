var BookModel = Backbone.Model.extend({
  turn_page: function(){
    console.log('The page was turned');
  }
});

var BookView = Backbone.View.extend({
  initialize: function() {
    Backbone.on('read', this.read);
  },
  read: function(){
    console.log('Read the book');
  },
  write: function(){
    console.log('Write the book');
  }
});

var AppRouter = Backbone.Router.extend({
  routes: {
    'read': 'readme',
    'write': 'writeme'
  },
  readme: function(){
    console.log('I have been read');
  },
  writeme: function(){
    console.log('I have been written');
  }
});

var router = new AppRouter();
var view = new BookView();

router.on('route:readme', function(){
  Backbone.trigger('read');
});

Backbone.history.start();





