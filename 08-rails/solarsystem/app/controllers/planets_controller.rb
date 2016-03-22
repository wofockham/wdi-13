class PlanetsController < ApplicationController
  def index
    @planets = Planet.all
  end

  def show
    @planet = Planet.find params[:id]
  end

  def new
  end

  def create
    planet = Planet.new
    planet.name = params[:name]
    planet.image = params[:image]
    planet.orbit = params[:orbit]
    planet.diameter = params[:diameter]
    planet.mass = params[:mass]
    planet.moons = params[:moons]
    planet.save
    redirect_to "/planets/#{ planet.id }"
  end
end
