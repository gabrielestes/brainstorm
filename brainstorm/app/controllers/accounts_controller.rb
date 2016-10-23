class AccountsController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(email: params[:user][:email], password: params[:user][:password])
    @user.save
    redirect_to 'accounts/' + "#{@user.id}"
  end
end
