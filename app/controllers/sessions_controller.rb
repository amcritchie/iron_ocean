class SessionsController < ApplicationController
  skip_before_filter :ensure_authenticated_user

  def new
    @user = User.new
  end

  def create
    @user = User.find_by(email: params[:user][:email].downcase)

    if @user && @user.authenticate(params[:user][:password])
      puts "auth success"
      session[:user_id] = @user.id
      # render json: @user
      redirect_to :back

    else
      puts "auth fail"
      # render json: {error: "Email / password is invalid."}
      redirect_to :back
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to :back
  end
end
