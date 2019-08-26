Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to: 'static_pages#root'

    namespace :api, defaults: {format: :json} do
      resources :posts, only: [:index, :show, :create, :destroy, :update] do 
        resources :comments, only: [:create, :show, :index]
      end
      resources :users
      resource :session, only: [:create, :destroy, :show]
      resources :likes, only: [:create, :show, :index, :update, :destroy]
      resources :follows, only: [:create, :destroy, :show, :index, :update]
      resources :comments, only: [:update, :destroy]

    end

  
  
  
  
end
 
