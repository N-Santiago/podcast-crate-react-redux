class PodcastsController < ApplicationController
    
    def index 
        podcasts = Podcast.all
        render json: podcasts.to_json( :include => [:episodes] )
    end 

    def create
        podcast = Podcast.new(podcast_params)
        if podcast.save
            render json: podcast.to_json( :include => [:episodes])
        else
            render json: {
                error: "Cannot create podcast",
                status: 500
            }, status: 500   
        end 
    end 

    def show
        podcast = Podcast.find(params[:id])
        render json: podcast.to_json( :include => [:episodes] )
    end 

    def destroy
        podcast = Podcast.find(params[:id])
        podcast.destroy
    end 

    private
    def podcast_params
        params.require(:podcast).permit(:title, :image, :website)
    end 
end
