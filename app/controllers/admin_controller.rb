class AdminController < ApplicationController
  def index
    if current_user
      if current_user.admin
        # Load admin
        puts "-1"*40
        puts @a = "Current user is an admin"
      else
        # Not admin, logout then login as admin
        puts "-2"*40
        puts @a = "Current user is not an admin"
      end
    else
      redirect_to login_path
    end
  end
end
