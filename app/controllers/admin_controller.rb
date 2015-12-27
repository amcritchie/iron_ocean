class AdminController < ApplicationController
  def index
    if current_user
      if current_user.admin
        # Load admin
        @a = 1
      else
        # Not admin, logout then login as admin
        @a = 2
      end
    else
      # Login
      @a = 3
    end
  end
end
