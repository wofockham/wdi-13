require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX
get '/butterflies' do
  @butterflies = query_db 'SELECT * FROM butterflies'
  erb :butterflies_index
end

get '/butterflies/new' do
  erb :butterflies_new
end

post '/butterflies' do
  query = "INSERT INTO butterflies (name, family, image) VALUES ('#{params[:name]}', '#{params[:family]}', '#{params[:image]}')"
  query_db query
  redirect '/butterflies'
end

get '/butterflies/:id' do
  @butterfly = query_db "SELECT * FROM butterflies WHERE id = #{ params[:id] }"
  erb :butterflies_show
end

def query_db(sql)
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true

  puts sql

  result = db.execute sql
  db.close
  result
end
