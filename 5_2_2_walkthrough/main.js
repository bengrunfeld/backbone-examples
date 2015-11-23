var BookModel = Backbone.Model.extend({
  defaults: {
    license: "Creative Commons"
  },
  printId: function(){
    console.log(this.id);
  }
});

var LibraryCollection = Backbone.Collection.extend({
  model: BookModel
});

var library = new LibraryCollection();
var book = new BookModel({title: "Harry Potter"});
library.add(book);