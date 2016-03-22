Rails.application.routes.draw do
  root :to => 'planets#index'
  get '/planets' => 'planets#index'
  get '/planets/new' => 'planets#new'
  get '/planets/:id' => 'planets#show'
  post '/planets' => 'planets#create'
end
