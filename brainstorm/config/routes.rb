Rails.application.routes.draw do
  devise_for :users, controllers: {
        sessions: 'users/sessions'
      }
  resources :users

  # root is defaulted to login/register
  devise_scope :user do
    root to: 'accounts#index'

  post '/' => 'accounts#create'

  get '/accounts/:id' => 'accounts#show'


  end
  # displays new game
  # get '/game'

  # displays top x scores by players
  # get '/leaderboard'

  # displays user's game history and account info
  # get profile



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
