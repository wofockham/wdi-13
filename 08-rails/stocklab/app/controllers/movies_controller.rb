class MoviesController < ApplicationController
  def form
  end

  def lookup
    movie_url = "http://omdbapi.com/?t=#{ params[:movie_title] }"
    @result = HTTParty.get movie_url
    redirect_to '/movies' if @result['Response'] == 'False'
  end
end
