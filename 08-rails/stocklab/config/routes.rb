Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/stocks' => 'stocks#form'
  get '/stocks/lookup' => 'stocks#lookup'

  get '/movies' => 'movies#form'
  get '/movies/lookup' => 'movies#lookup'
end
