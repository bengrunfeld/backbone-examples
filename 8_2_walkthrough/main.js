var Router = Backbone.Router.extend({
  routes: {
    'write': 'write_post',
    'read/:id': 'read_article',
    'play/:album/t:track': 'play_music',
    'record/:album/about/*description': 'record_music',
    'optional(/:item)': 'choose',
    'named/option(/o:option)': 'named_choice',
    '*anything': 'default_route',
  },
  write_post: function() {
    // matches #write
    console.log('Write a blog post');
  },
  read_article: function(id) {
    // matches #read/3
    console.log('Read article: ' + id);
  },
  play_music: function(album, song) {
    // matches #play/kiasmos/t5
    console.log('Album: ' + album + ', Track: ' + song)
  },
  record_music: function(album, description) {
    // matches #record/kiasmos/about/a/great/album
    console.log('Album: ' + album + ', Desc: ' + description);
  },
  choose: function(item) {
    // matches #optional/33
    console.log('Option: ' + item);
  },
  named_choice: function(option) {
    // matches #named/option/o33
    console.log('Named option: ' + option);
  },
  default_route: function() {
    console.log('This is the default route');
  }
});

var router = new Router();

Backbone.history.start();