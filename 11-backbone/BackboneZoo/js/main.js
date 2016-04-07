var Animal = Backbone.Model.extend({
  defaults: {
    living: true,
    type: "N/A"
  },

  initialize: function () {
    this.on("change", function () { // Generic change event
      // console.log("Some attribute changed");
    });
    this.on("change:type", function (animal) {
      var previousType = animal.previousAttributes().type;
      var newType = animal.changedAttributes().type;
      console.log( "It had a type of " + previousType + ", but now it is a " + newType );
    });
  }
});

var kangaroo = new Animal();

var living = kangaroo.get("living"); // One specific attribute
// console.log(living);

kangaroo.set("type", "Kangaroo"); // Setting one attribute
kangaroo.set({
  pouch: true,
  tail: true
}); // Setting multiple attributes

kangaroo.set("type", "Giant Kangaroo");

var kangarooAttrs = kangaroo.toJSON(); // All attributes
console.log( kangarooAttrs );
