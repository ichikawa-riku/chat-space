Rails.application.routes.draw do
  root 'massages#index'
  devise_for :users
  resources :users, only: [:edit, :update]
  resources :massages
end
