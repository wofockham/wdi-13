# The routes file connects a particular URL with a particular method
Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/about' => 'pages#about'
  get '/faq' => 'pages#faq'

  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  get '/calc/:x/:y/:operator' => 'calc#calculate'
end
