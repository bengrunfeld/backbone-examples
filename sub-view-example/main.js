// Saving Sub Views for later

var FederationModel = Backbone.Model.extend();

var StateView = Backbone.View.extend({
  // template: _.template($('#state-tpl').html()),
  
  render: function(){
    // console.log(this.model.attributes);
    this.$el.html(this.model.attributes);
    return this;
  }
});

var FederationView = Backbone.View.extend({
  el: $('.target'),

  render: function(){
    var states = this.model.get('states');

    _.each(states, function(state){
      console.log(state);
      var state_view = new StateView({model: state});
      this.$el.append(state_view.render().el);
    }, this);
  }
});


// var tom = new Student();
var fed_model = new FederationModel({states: {first: "AZ", second: "CA", third: "DL"}});
var fed_view = new FederationView({model: fed_model});
fed_view.render();