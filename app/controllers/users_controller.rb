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
    render json: User.update(params[:id], user_params)
  end

  def destroy
    render json: User.destroy(params[:id])
  end

  private

def user_params
  params.require(:user).permit(:first_name, :last_name, :email)
end
end
