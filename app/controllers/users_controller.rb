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
    render json: User.update(params[:id], params[:user])
  end

  def destroy
    render json: User.destroy(params[:id])
  end
end
