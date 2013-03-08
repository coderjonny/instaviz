
window.instaviz = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    console.log('Hello from Backbone!');

    new instaviz.Models.PhotoModel({
      src: 'placeholder.png',
      caption: 'Me at google i/o 2012',
      tags: ['#io12', '#io2012']
    });
  }
};

$(document).ready(function(){
  instaviz.init();
});
