class UsersController < ApplicationController
  respond_to :json

  def index
    # render json: User.all
    render json: User.all.map(&:index)
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
    @user = User.new(user_params)
    @address = @user.addresses.new(address_params)
    @user.password = user_params[:password_digest]
    puts "="*100
    puts user_params
    puts user_params[:pass]
    puts user_params[:password_digest]
    puts "="*100
    puts @user
    puts "="*100

    # if @user == current_user || current_user.try(:admin)
      if @user.save && @address.save
        puts "---1"*20
        puts @user.errors
        render json: {user: @user, messages: @user.errors}
      else
        puts "---2"*20
        puts @user.errors
        render json: {user: @user, messages: @user.errors}
      end
    # else
    #   render json: {error: 'Not authed to update this user'}
    # end
    # render json: User.create(params[:user])
  end

  def update
    @user = User.find(params[:id])
    if @user == current_user || current_user.try(:admin)
      if @user.update(user_params) && @user.address.update(address_params)
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
    params.require(:user).permit(:first_name, :last_name, :email, :password, :pass, :password_digest, :time_zone)
  end
  def address_params
    params.require(:address).permit(:street, :city, :state, :country, :zip, :phone)
  end
end
