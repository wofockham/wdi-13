/*
The World Translator

Write a function named helloWorld that:

takes 1 argument, a language code (e.g. "es", "de", "en")
returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
Call that function for each of the supported languages and log the result to make sure it works.
*/

var helloWorld = function (code) {
    if (code === 'es') {
      return "Hola mundo";
    } else if (code === 'de') {
      return "Hallo Welte";
    } else {
      return "Hello world";
    }
};

console.log( helloWorld('es') );
console.log( helloWorld('de') );
console.log( helloWorld('en') );
console.log( helloWorld('fr') );
