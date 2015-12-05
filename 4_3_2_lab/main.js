// Define an Item Model
var ItemModel = Backbone.Model.extend({
  defaults: {
    img_src: 'placeholder.gif'
  },
});

// Define an Item View
var ItemView = Backbone.View.extend({
  el: '.target',
  template: _.template($('#item-tpl').html()),

  render: function(){
    for (var i = 0; i < this.model.length; i++){
      var item_tpl = this.template(this.model[i].toJSON());
      this.$el.append(item_tpl);
    }
    return this;
  }
});

var broccoli = new ItemModel({img_src: 'broccoli.jpg', img_alt: 'broccoli', caption: 'Delicious broccoli'});
var steak = new ItemModel({img_src: 'steak.png', img_alt: 'steak', caption: 'Juicy Steak'});
var tofu = new ItemModel({img_src: 'tofu.jpg', img_alt: 'tofu', caption: 'Seared Tofu'});

broccoli_view = new ItemView({model: [steak, broccoli, tofu]});

broccoli_view.render();





