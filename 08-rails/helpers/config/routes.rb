Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/numbers' => 'pages#numbers'
  get '/text' => 'pages#text'
  get '/billmurray' => 'pages#railsassets', :as => 'railsassets'
  get '/url' => 'pages#url'
end
