var StudentView = Backbone.View.extend({
  el: '.target',
  template: _.template($('#name-tpl').html()),

  render: function(){
    var student_tpl = this.template({name: 'Matt'});
    this.$el.html(student_tpl);
  }
});

var student_view = new StudentView();
student_view.render();
