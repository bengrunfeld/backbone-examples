// Define a Student View
var ButtonView = Backbone.View.extend({
  el: '.target',

  events: {
    'click .btn1': 'wasClicked',
    'mouseover .btn2': 'wasMousedOver',
    'dblclick .btn3': 'wasDblClicked'
  },

  wasClicked: function(e) {
    console.log("I was clicked");
  },

  wasMousedOver: function(e) {
    console.log("I was moused over");
  },

  wasDblClicked: function(e) {
    console.log("I was double clicked");
  }
});

var btn_view = new ButtonView();

$('.target').append('<button class="btn1">Button 1</button>');
$('.target').append('<button class="btn2">Button 2</button>');
$('.target').append('<button class="btn3">Button 3</button>');





