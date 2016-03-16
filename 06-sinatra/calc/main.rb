require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get "/" do
  "Hello"
end

get "/home" do
  erb :home
end

get "/about" do
  erb :about
end

get "/calc/:a/:b" do
  @result = params[:a].to_i + params[:b].to_i
  erb :calc
end
