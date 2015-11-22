var BookModel = Backbone.Model.extend({
  defaults: {
    license: "Creative Commons"
  }
});

var LibraryCollection = Backbone.Collection.extend({
  model: BookModel
});

// Instantiate the Collection
var library = new LibraryCollection();

// Create some Models
var harry_potter = new BookModel({title: "Harry Potter"});
var the_alchemist = new BookModel({title: "The Alchemist"});
var grapes_of_wrath = new BookModel({title: "Grapes of Wrath"});

// Add the models to the Collection
library.add([harry_potter, the_alchemist, grapes_of_wrath]);

// Log out information about the collection
console.log("Add to Collection");
console.log(library.length);
console.log(JSON.stringify(library.toJSON()));

// Remove a model from the collection
library.remove(the_alchemist);

// Log out information about the collection
console.log("Remove from Collection");
console.log(library.length);
console.log(JSON.stringify(library.toJSON()));