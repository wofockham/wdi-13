class Person
  attr_accessor :year_of_birth

  def alive? # Predicate
    true
  end
end

class MarxBrother < Person # Inheritance
  attr_accessor :name, :instrument, :vice # Macro

  def initialize(name = '', instrument = '', vice = '') # Default arguments
    @name = name
    @instrument = instrument
    @vice = vice
  end

  def bio
    "My name is #{@name} and I play the #{@instrument}"
  end
end

groucho = MarxBrother.new 'Groucho', 'guitar', 'cigars'
harpo = MarxBrother.new

require 'pry'
binding.pry
