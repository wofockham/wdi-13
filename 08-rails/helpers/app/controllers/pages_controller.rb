class PagesController < ApplicationController
  def home
  end

  def numbers
    @amount = 22434
    @large_number = 2457385745
    @phone = 2125551212
  end

  def text
    @numbers = (1..20).to_a.shuffle
    @friends = 1
    @enemies = 37
    @story = "A very long long long long time ago in a galaxy far far far away" * 15
  end

  def railsassets
  end

  def url
  end
end
