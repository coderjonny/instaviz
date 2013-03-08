instaviz.Models.PhotoModel = Backbone.Model.extend({
   defaults: {
      'src': 'placeholder.png',
      'caption': 'A default image',
      'isViewed': false,
      'tags' : []
    },
    initialize: function() {
      console.log('init photo model...');
      console.log(JSON.stringify(this));
    }
});
