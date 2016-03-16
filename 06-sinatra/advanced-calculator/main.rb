require "pry"
require "sinatra"
require "sinatra/reloader"

get "/" do
  erb :home
end

get "/calc" do
  @num_one = params[:num_one].to_i
  @num_two = params[:num_two].to_i
  @operation = params[:operation]

  @result = case @operation
  when "add" then @num_one + @num_two
  when "subtract" then @num_one - @num_two
  when "divide" then @num_one / @num_two
  when "multiply" then @num_one * @num_two
  end

  # @result = @num_one + @num_two
  erb :results
end
