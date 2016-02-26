// This factory function lets us easily create similar objects.
var marxBrotherFactory = function (name, instrument, vice) {
  return {
    'name': name,
    'instrument': instrument,
    'vice': vice,
    'sing': function () {
      console.log('Everyone says I love you');
    }
  };
};

// The tedious way of creating a Marx Brother object:
var groucho = {
  name: 'Groucho',
  instrument: 'guitar',
  vice: 'cigars'
};

// The much easier way of creating Marx Brothers:
var harpo = brosFactory('Harpo', 'harp', 'mutism');
var chico = brosFactory('Chico', 'piano', 'lechery');
