class CurrentUserController < ApplicationController
  before_action :authenticate_user!
  def index
    # byebug 
    render json: UserSerializer.new(current_user).serializable_hash, status: :ok
  end
end
