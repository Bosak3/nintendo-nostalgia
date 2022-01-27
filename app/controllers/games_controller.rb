class GamesController < ApplicationController

    def index
        game = Game.all
        render json: game
    end

    def show
        game = Game.find_by(id: params[:id])
        render json: game
    end
    
    
end
