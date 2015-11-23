var Router = Backbone.Router.extend({
  routes: {
    'write': 'write_post',
    'sing': 'sing_song',
    'read/:id': 'read_article',
  },
  write_post: function() {
    // matches #write
    alert('Write a blog post');
    this.navigate('/read/6');
  },
  read_article: function(id) {
    // matches #read/6
    console.log('Read article: ' + id);
  },
  sing_song: function(){
    // matches #sing
    alert('Sing a song');
    this.navigate('/read/6', {trigger: true});
  }
});

var router = new Router();

Backbone.history.start();