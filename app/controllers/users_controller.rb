class UsersController < ApplicationController
    def index
        user = User.all
        render json: user
    
    end

    def create
        user = User.create(name: params[:name], email: params[:email])
        render json: user, status: :created
    end
end
