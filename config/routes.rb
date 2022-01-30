Rails.application.routes.draw do
  
  resources :reviews
  resources :platforms, only: [:index, :show]
  resources :games, only: [:index, :show]
  resources :users
  
  

  post "/login", to: "sessions#create"

  get "/auth", to: "users#show"
  
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
