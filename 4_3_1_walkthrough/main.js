// Define a Student Model
var StudentModel = Backbone.Model.extend({
  defaults: {
    college: "CU Denver",
    state: "Colorado"
  },
  initialize: function(){
    console.log("Attributes: " + JSON.stringify(this.attributes));
  }
});

// Define a Student View
var StudentView = Backbone.View.extend({
  el: '.target',
  template: _.template($('#student-tpl').html()),

  render: function(){
    var student_tpl = this.template(this.model.toJSON());
    this.$el.html(student_tpl);
    return this;
  }
});

var tom = new StudentModel({name: "Tom"});
var tom_view = new StudentView({model: tom});
tom_view.render();







