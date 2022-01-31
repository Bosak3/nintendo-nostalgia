class UsersController < ApplicationController

  def index
    user = User.all
    render json: user
  end
  
  def show
    
    if current_user
      render json: current_user, status: :ok
    else 
      render json: "No one is logged in",
      status: :unauthorized
    end
  end
    
 

  def create

    user= User.create!(user_params)
    session[:user_id] = user.id
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
    params.permit(:username, :email, :password)
  end
 

end


