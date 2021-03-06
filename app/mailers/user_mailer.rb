class UserMailer < ActionMailer::Base
  default from: "admin@ironocean.io"

  def account_reactivation(user)
    @user = user
    mail to: @user.email, subject: "Account Reactivation"
  end

  def account_deactivation(user, message)
    @user = user
    @message = message
    mail to: @user.email, subject: "Account Deactivation"
  end
end
