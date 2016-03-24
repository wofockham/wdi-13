Rails.application.routes.draw do
  root :to => 'pages#welcome'

  resources :users, :only => [:new, :create, :index, :update]
  get '/users/edit' => 'users#edit'

  get '/signup' => 'users#new'

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
