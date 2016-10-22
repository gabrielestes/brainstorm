class AccountsController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    @user.save
    redirect_to 'accounts/' + "#{@user.id}"
  end
end
