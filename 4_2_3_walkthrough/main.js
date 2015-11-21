var StudentView = Backbone.View.extend({
  el: '.target',
  template: _.template($('#name-tpl').html()),
  names: ['adam', 'ben', 'charles'],

  render: function(){
    var student_tpl = this.template({names: this.names});
    this.$el.html(student_tpl);
  }
});

// var tom = new Student();
var student_view = new StudentView();
student_view.render();
