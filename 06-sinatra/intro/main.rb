require "pry"
require "sinatra"
require "sinatra/reloader"

get "/" do
  "Hello World!"
end

get "/arrow" do
  "is a nickname"
end

get "/arrow" do
  "something else mildly funny for me"
end

get "/hello/josh" do
  "Hello Josh"
end

get "/hello/alan" do
  "Hello Alan"
end

get "/hello/sam" do
  "Hello Sam"
end

get "/hello/:name" do
  "Hello #{ params[:name] }"
end
