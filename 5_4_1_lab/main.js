Backbone.subViews = [];

// Define a Item Model
var ItemModel = Backbone.Model.extend({
  defaults: {
    img_src: 'placeholder.gif'
  },
});

// Define a Item View
var ItemView = Backbone.View.extend({

  template: _.template($('#item-tpl').html()),

  render: function(){
    var item_tpl = this.template(this.model.toJSON());
    this.$el.html(item_tpl);
    return this;
  },

  events: {
    'click .remove': 'removeMe'
  },
  removeMe: function() {
    this.remove();
  },
});


// Define a Collection View
var CollectionView = Backbone.View.extend({
  el: '.target',
  
  render: function(){
    this.collection.each(function(itemModel){
      var itemView = new ItemView({model: itemModel});
      Backbone.subViews.push(itemView);
      this.$el.append(itemView.render().el);
    }, this);
    
    return this;
  },

  removeAllViews: function() {
    _.each(Backbone.subViews, function(childView){
      childView.remove();
    });
  }
});

// Define a Collection
var Collection = Backbone.Collection.extend({
  model: ItemModel
});

// Instatiate your model and view
var broccoli = new ItemModel({img_src: 'broccoli.jpg', img_alt: 'broccoli', caption: 'Delicious broccoli'});
var steak = new ItemModel({img_src: 'steak.png', img_alt: 'steak', caption: 'Grilled Steak'});
var tofu = new ItemModel({img_src: 'tofu.jpg', img_alt: 'tofu', caption: 'Seared Tofu'});
var salmon = new ItemModel({img_src: 'salmon.jpg', img_alt: 'salmon', caption: 'Smoked Salmon'});

// Instantiate a new collection
var menuCollection = new Collection([broccoli, steak, tofu]);

// Instantiate a new collection view
var collectionView = new CollectionView({collection: menuCollection});

// Render
collectionView.render();

// Extra
menuCollection.add(salmon);

collectionView.removeAllViews();

collectionView.render();








