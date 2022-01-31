Rails.application.routes.draw do
  
  resources :reviews
  resources :platforms, only: [:index, :show]
  resources :games, only: [:index, :show]
  resources :users
  
  
  get '/me', to: "users#show"

  post '/login', to: "sessions#login"

  delete '/logout', to: "sessions#logout"
  
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
