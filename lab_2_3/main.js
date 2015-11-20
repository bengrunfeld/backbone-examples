// Define a Student Model with defaults and an initializer
var Student = Backbone.Model.extend({
  defaults: {
    college: "CU Denver",
    state: "Colorado"
  },
  initialize: function(){
    console.log("Attributes: " + JSON.stringify(this.attributes));
  },
  validate: function(attrs){
    if (attrs.state !== "Colorado") {
      console.log("Out of state. Invalid");
    }
  }
});

// Instantiate a new Student
var tom = new Student();

// Set some attributes
tom.set({state: "California"}, {validate: true});

// Check the result
console.log(tom.toJSON());