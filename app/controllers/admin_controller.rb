class AdminController < ApplicationController
  def index
    if current_user
      if current_user.admin
        @users = User.all
      else
        redirect_to :back
      end
    else
      redirect_to login_path
    end
  end
end
