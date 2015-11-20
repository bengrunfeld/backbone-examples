// Define a Student Model with defaults and an initializer
var Student = Backbone.Model.extend({
  defaults: {
    college: "CU Denver",
    state: "Colorado"
  },
  initialize: function(){
    console.log("Attributes: " + JSON.stringify(this.attributes));
  }
});

// Instantiate a new Student
var tom = new Student();

// Set some attributes
tom.set({
  major: "Physics",
  gpa: 4.0
});

// Make sure that attributes were set
var major = tom.get('major');
var gpa = tom.get('gpa');
console.log("Major: " + major + ', GPA: ' + gpa);

// Print out all attributes of the model instance in Object and String form
console.log(tom.toJSON());
console.log(JSON.stringify(tom));