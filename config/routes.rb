Rails.application.routes.draw do
  root 'groups#index'
  devise_for :users
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:edit, :update, :new, :create] do
      resources :messages, only: [:index, :create]
    end
end
