Rails.application.routes.draw do
  # get 'login/create'
  # post 'login/create'
  resources :login
  resources :users 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :podcasts do
    resources :episodes
  end 
  resources :episodes
end
