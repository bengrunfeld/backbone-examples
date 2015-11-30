// Define a Student Model
var ItemModel = Backbone.Model.extend({
  defaults: {
    img_src: 'placeholder.gif'
  },
});

// Define a Student View
var ItemView = Backbone.View.extend({
  el: '.target',
  template: _.template($('#item-tpl').html()),

  render: function(){
    var item_tpl = this.template(this.model.toJSON());
    this.$el.html(item_tpl);
    return this;
  }
});

var broccoli = new ItemModel({img_src: 'broccoli.jpg', img_alt: 'broccoli', caption: 'Delicious broccoli'});

broccoli_view = new ItemView({model: broccoli});

broccoli_view.render();
