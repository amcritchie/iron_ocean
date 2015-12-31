class UsersController < ApplicationController
  respond_to :json

  def index
    render json: User.all
  end

  def show
    @user = User.find(params[:id])
    user = @user.as_json
    user[:address] = @user.address
    user[:author] = @user.author
    user[:admin] = @user.admin
    render json: user
  end

  def create
    render json: User.create(params[:user])
  end

  def update
    puts "1____1"*30
    puts params
    puts "-"
    puts params[:user]
    puts "-"
    puts params[:user][:address]
    puts "-"
    puts params[:address]
    puts "2____2"*30
    @user = User.find(params[:id])
    if @user == current_user || current_user.try(:admin)
      if @user.update(user_params) && @user.address.update(params[:address])
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
    # params.require(:user).permit(:first_name, :last_name, :email, :addresses_attributes)
    params.require(:user).permit(:first_name, :last_name, :email, addresses_attributes: [ :street, :city ])
  end
end
