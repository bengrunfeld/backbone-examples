var StudentView = Backbone.View.extend({
  tagName: 'p',
  className: 'student-title',
  el: '.target',

  render: function(){
    this.$el.html('My first render');
  }
});

// var tom = new Student();
var student_view = new StudentView();
student_view.render();
