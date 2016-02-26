// Here we return individual cat objects via a factory:
var catFactory = function (name, furColor, age) {
  return {
    'name': name,
    'furColor': furColor,
    'age': age,
    'info': function () {
      console.log(this); // this refers to the current object.
    },
    'bio': function () {
      // Output the name and age of this specific cat.
      console.log(this.name + ' is ' + this.age);
    },
    'meow': function () {
      console.log(this.name + ': meow');
    }
  };
};

var lizzieTheCat = catFactory('Lizzie', 'grey', 18);
var daemon = catFactory('Daemon', 'black', 1);
var angel = catFactory('Angel', 'orange', 2);

// Each cat's meow is now distinct so we can tell them apart.
lizzieTheCat.meow();
daemon.meow();
angel.meow();
