class LoginController < ApplicationController
  def create
    user = User.find_by("lower(email) = ?", params[:email].downcase)
    if user && user.authenticate(params[:password])
      render json: { token: token(user.id), user: { id: user.id, email: user.email } }, status: :created 
    else 
      render json: { errors: [ "Sorry, incorrect email or password" ] }, status: :unprocessable_entity
    end 
  end

  

  private 
  # def user_params
  #   params.require(:user).permit(:email, :password)
  # end
end
