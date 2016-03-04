// This is a JS object constructor. It works by magic.
var Bros = function (name, instrument, vice) {
  this.name = name;
  this.instrument = instrument;
  this.vice = vice;
  this.sing = function () {
    console.log('Everyone says I love you');
  }
};

// Here we create individual Marx Brothers using the constructor above.
var groucho = new Bros('Groucho', 'guitar', 'cigars');
var harpo = new Bros('Harpo', 'harp', 'mutism');
var chico = new Bros('Chico', 'piano', 'lechery');
