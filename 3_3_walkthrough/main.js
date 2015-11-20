// Define a Student Model with defaults and an initializer
var Student = Backbone.Model.extend({
  defaults: {
    college: "CU Denver",
    state: "Colorado"
  },
  validate: function(attrs){
    if (attrs.state !== 'Colorado') {
      return "Out of state. Invalid";
    }
  },
  initialize: function(){
    console.log("Model has been instantiated");

    // Set listener for invalid event
    this.on('invalid', function(model, error){
      console.log(model);
      console.log(error);
    });
  }
});

// Instantiate a new Student
var tom = new Student();

// Set some attributes
tom.set({state: "California"}, {validate: true});

// See what happened to the value
console.log(tom.toJSON());