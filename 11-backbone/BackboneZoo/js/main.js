var Animal = Backbone.Model.extend({
  defaults: {
    living: true,
    type: 'N/A'
  },

  initialize: function () {
    this.on('change', function () { // Generic change event
      // console.log('Some attribute changed');
    });
    this.on('change:type', function (animal) {
      var previousType = animal.previousAttributes().type;
      var newType = animal.changedAttributes().type;
      console.log( 'It had a type of ' + previousType + ', but now it is a ' + newType );
    });
  }
});

var kangaroo = new Animal();

var living = kangaroo.get('living'); // One specific attribute
// console.log(living);

kangaroo.set('type', 'Kangaroo'); // Setting one attribute
kangaroo.set({
  pouch: true,
  tail: true
}); // Setting multiple attributes

kangaroo.set('type', 'Giant Kangaroo');

var kangarooAttrs = kangaroo.toJSON(); // All attributes
console.log( kangarooAttrs );


var Zoo = Backbone.Collection.extend({
  model: Animal,

  initialize: function () {
    console.log('New Zoo created');
    this.on('add', function (animal) {
      console.log('New animal moved to the Zoo');
    });
    this.on('remove', function () {
      console.log('An animal is not currently living.');
    });
  }
});

var butterfly = new Animal({ type: 'Monarch' });

var zoo = new Zoo([ kangaroo, butterfly ]);

zoo.add({
  type: 'Giraffe',
  age: 10,
  gender: 'male',
  living: false
});

var badger = new Animal({
  type: 'Badger'
});
var panda = new Animal({
  type: 'Panda',
  living: false,
  id: 10
});

zoo.add(badger);
zoo.add(panda, { at: 0 });

zoo.remove( panda );
