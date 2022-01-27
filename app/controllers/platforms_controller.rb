class PlatformsController < ApplicationController
    
    def index
        platform = Platform.all
        render json: platform
    
    end

end
