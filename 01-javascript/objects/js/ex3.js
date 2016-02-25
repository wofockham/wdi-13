/*
The Movie Database

It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

var movie = {
  title: 'O Brother! Where Art Thou?',
  duration: '147',
  stars: ['George Clooney', 'Gillian Welch', 'That Really Slinty Guy']
};

var movieInfo = function (m) {
    var message = [m.title,
      'lasts for',
      m.duration,
      'minutes. Stars:',
      m.stars.join(', ')
    ].join(' ');
    console.log(message);
};

movieInfo(movie);
