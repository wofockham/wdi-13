Rails.application.routes.draw do
  root :to => 'pages#index'
  get '/lotto' => 'pages#lotto'
  get '/brother' => 'pages#brother'
  get '/uptime' => 'pages#uptime'
  get '/fortune' => 'pages#fortune'

  get '/info' => 'pages#info'
end
