var StudentView = Backbone.View.extend({
  el: '.target',
  template: _.template($('#name-tpl').html()),

  render: function(){
    var student_tpl = this.template({name: 'Rikard'});
    this.$el.html(student_tpl);
  }
});

// var tom = new Student();
var student_view = new StudentView();
student_view.render();
