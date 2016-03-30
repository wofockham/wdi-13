Rails.application.routes.draw do
  root 'posts#index'
  # root :to => 'posts#index'

  get 'posts/index'
  get 'posts/new'
  post '/posts' => 'posts#create'
end
