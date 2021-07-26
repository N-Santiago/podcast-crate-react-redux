class PodcastsController < ApplicationController
    
    def index 
        podcasts = Podcast.all.with_attached_image
        # render json: podcasts.to_json( :include => [:episodes] )
        render json: podcasts
    end 

    def create
        podcast = Podcast.new(podcast_params)
        if podcast.save
            render json: podcast
        else
            render json: {
                error: "Cannot create podcast",
                status: 500
            } 
        end 
    end 

    def show
        podcast = Podcast.find(params[:id])
        render json: podcast
    end 

    def destroy
        podcast = Podcast.find(params[:id])
        podcast.destroy
    end 

    private
    def podcast_params
        params.permit(:title, :image, :website)
    end 
end
