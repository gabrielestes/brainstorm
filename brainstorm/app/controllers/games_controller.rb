class GamesController < ApplicationController
  def create
    @game = Game.new
  end

  def show
    @top_five = Game.order(score: :desc).first(5)
  end
  
end
