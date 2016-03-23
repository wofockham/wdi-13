class ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end

  def new
    @artist = Artist.new
  end

  def edit
  end

  def show
    @artist = Artist.find params[:id]
  end
end
