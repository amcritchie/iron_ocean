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
    user[:password] = ""

    render json: user
  end

  def create
    @user = User.new(user_params)
    @user.password = params[:password]

    @address = @user.addresses.new(address_params) if params[:address]


    # if @user == current_user || current_user.try(:admin)
      # if @user.save && @address.save
      if @user.save
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
    puts "="*4000
    # puts params
    # puts '-'
    # puts user_params
    puts '-'
    puts user_params[:image].class
    puts user_params[:image][0..100]
    puts user_params[:image][10..100]
    puts user_params[:image][20..100]
    puts user_params[:image][21..100]
    puts user_params[:image][22..100]
    # puts user_params[:image][23..100]
    # puts user_params[:image][24..100]
    # puts user_params[:image][2200000..-1]
    puts '-'
    # puts params[:user]
    # puts params[:image]
    # puts params[:user][:image]
    puts "="*4000

    # base_64_encoded_data = user_params[:image]
    @user = User.find(params[:id])
    # @user[:image] =

    base_64_encoded_data = user_params[:image][22..-1]
    a = 1
    # File.open('shipping_label.jpg', 'wb') do|f|
    #   # f.write(Base64.decode64(base_64_encoded_data))
    #   f.write(Base64.decode64(base_64_encoded_data))
    # end
    #
    # File.open('shipping_label.jpg', 'wb') do|f|
    #   f.write(Base64.decode64(base_64_encoded_data))
    # end


    # encoded_file = Base64.encode64(File.open('/pjt_path/public/test.jpg').read)
    # decoded_file = Base64.decode64(params[:encoded_image])
    decoded_file = Base64.decode64(user_params[:image][22..-1])
    # begin
      file = Tempfile.new(['test', '.jpg'])
      file.binmode
      file.write decoded_file
      file.close
      # @user.image = file
      # @user.save
    #   if @user.save
    #     puts "Save-"*100
    #   else
    #     puts "Fail-"*100
    # #     render :json => {:message => "Successfully uploaded the profile picture."}
    # #   else
    # #     render :json => {:message => "Failed to upload image"}
    # #   end
    # # ensure
    # #   file.unlink
    # end

    user_params[:image] = file



    puts "__1"
    puts file
    puts "__1"
    puts user_params
    puts "__2"

    if @user == current_user || current_user.try(:admin)
      if @user.update(user_params)
      # if @user.update(user_params) && @user.address.update(address_params)
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
    params.require(:user).permit(:first_name, :last_name, :email, :password, :image, :password_digest, :time_zone)
  end
  def address_params
    params.require(:address).permit(:street, :city, :state, :country, :zip, :phone)
  end
end
