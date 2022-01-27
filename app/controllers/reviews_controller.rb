class ReviewsController < ApplicationController

#-------------------GET------------------------
    def index
        review = Review.all
        render json: review
    end

    def show
        review = Review.find_by(id: params[:id])
        render json: review
    end

#------------------Create----------------------
    def create
        review = Review.create(comment: params[:comment], user_id: params[:user_id], game_id: params[:game_id])
        render json: review, status: :created
        
    end

#-------------------POST-----------------------
    def update 
        review = Review.find_by(id: params[:id])
            if review
                review.update(review_params)
                render json: review
            else
                render json: { error: "Review not found"}, status: :not_found
            end
    end

#------------------DELETE-----------------------

    def destroy
        review = Review.find_by(id: params[:id])
            if review
                review.destroy
                head :no_content
            else
                render json: { error: "Review not found"}, status: :not_found
            end
     end


    private

    def review_params
        params.permit(:comment)
    end


    
end
