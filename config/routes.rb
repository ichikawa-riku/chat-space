Rails.application.routes.draw do
  root 'groups#index'
  devise_for :users
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:edit, :update, :new, :create] do resources :messages, only: [:index, :create] end
end
