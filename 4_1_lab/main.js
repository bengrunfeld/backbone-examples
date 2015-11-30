var StudentView = Backbone.View.extend({
  el: '.target',

  render: function(){
    this.$el.html('My first render');
  }
});

// Instantiate our View
var student_view = new StudentView();

// Render the View
student_view.render();
