var BookModel = Backbone.Model.extend({
  defaults: {
    license: "Creative Commons"
  },
  initialize: function(){
    console.log(this.id);
    console.log(this.cid);
    console.log(this.idAttribute);
  }
});

// Create some Model
var book = new BookModel({title: "Harry Potter"});
