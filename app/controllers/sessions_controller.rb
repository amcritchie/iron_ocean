class SessionsController < ApplicationController
  skip_before_filter :ensure_authenticated_user

  def new
    redirect_to :back if current_user
    @user = User.new
  end

  def create
    @user = User.find_by(email: params[:user][:email].downcase)
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      if @user.admin
        redirect_to admin_path
      else
        redirect_to blogs_path
      end
    else
      redirect_to :back
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to :back
  end
end
