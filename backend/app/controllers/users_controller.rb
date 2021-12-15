class UsersController < ApplicationController
    def create
        user = User.create!({ email: params[:email], password: params[:password],
                          password_confirmation: params[:password_confirmation] })
        
        render json: { token: token(user.id), user: { id: user.id, email: user.email } }              
    end 

    private 
    # def user_params
    #     params.require(:user).permit(:email, :password)
    # end
end
