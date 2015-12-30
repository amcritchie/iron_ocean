class UsersController < ApplicationController
  respond_to :json

  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def create
    render json: User.create(params[:user])
  end

  def update
    @user = User.find(params[:id])
    if @user == current_user || current_user.try(:admin)
      if @user.update(user_params)
        render json: @user
      else
        render json: @user
      end
    else
      render json: {error: 'Not authed to update this user'}
    end
  end

  def destroy
    render json: User.destroy(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email)
  end
end
