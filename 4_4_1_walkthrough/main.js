// Define a Button View
var ButtonView = Backbone.View.extend({
  el: '.btn1',
  
  events: {
    click: function(e) {
      console.log("You clicked the button");
    }
  }
});

var btn_view = new ButtonView();
// btn_view.setElement($('.btn2'));