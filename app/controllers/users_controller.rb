class UsersController < ApplicationController
    wrap_parameters format: []

  def index
    user = User.all
    render json: user
  end
  
  def show
    current_user = User.find_by(session[:user_id])
    render json: current_user
    
 
  end

  def create

    user= User.create!(user_params)
    render json: user, status: :created
  end
  
 

  def destroy
    user = User.find_by(id: params[:id])
        if user
            user.destroy
            head :no_content
        else
            render json: { error: "User not found"}, status: :not_found
        end
  end


  private
  
  def user_params
    params.permit(:username, :password)
  end
 

end


