class UsersController < ApplicationController
  respond_to :json

  def index
    render json: {users: User.all.map(&:index), status: 200}
  end

  def show
    @user = User.find(params[:id])
    user = @user.as_json
    user[:address] = @user.address
    user[:author] = @user.author
    user[:admin] = @user.admin
    user[:password] = ""

    render json: user
  end

  def create
    @user = User.new(user_params)
    if @user == current_user || current_user.try(:admin)
      if @user.save
        render json: {user: @user.index, status: 200}
      else
        render json: {user: @user.index, errors: @user.errors.messages}
      end
    else
      render json: {error: 'Not authed to update this user'}
    end
  end

  def update
    @user = User.find(params[:id])

    if @user == current_user || current_user.try(:admin)
      if @user.update(user_params)
        render json: {user: @user.index, status: 200}
      else
        render json: {user: @user.index, errors: @user.errors.messages}
      end
    else
      render json: {error: 'Not authed to update this user'}
    end
  end

  def destroy
    render json: User.destroy(params[:id])
  end

  def resend_confirmation_email
    @user = User.find(params[:id])
    render json: {user: @user, status: 200}
  end

  def reactivate
    @user = User.find(params[:id])
    @user.update(active: true)
    # UserMailer.account_reactivation(@user).deliver
    render json: {user: @user, status: 200}
  end

  def deactivate
    @user = User.find(params[:id])
    @user.update(active: false)
    # UserMailer.account_deactivation(@user, params[:message]).deliver
    render json: {user: @user, status: 200}
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :image, :time_zone,
    addresses_attributes: [:id, :street, :zip, :phone])
  end
end
