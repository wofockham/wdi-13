# == Route Map
#
#      Prefix Verb   URI Pattern                 Controller#Action
#     artists GET    /artists(.:format)          artists#index
#             POST   /artists(.:format)          artists#create
#  new_artist GET    /artists/new(.:format)      artists#new
# edit_artist GET    /artists/:id/edit(.:format) artists#edit
#      artist GET    /artists/:id(.:format)      artists#show
#             PATCH  /artists/:id(.:format)      artists#update
#             PUT    /artists/:id(.:format)      artists#update
#             DELETE /artists/:id(.:format)      artists#destroy
#

Rails.application.routes.draw do
  resources :artists
end
