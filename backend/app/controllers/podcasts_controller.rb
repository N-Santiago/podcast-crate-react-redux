class PodcastsController < ApplicationController
    def index 
        podcasts = Podcast.all
        render json: podcasts.to_json( :include => [:episodes] )
    end 

    def create
        podcast = Podcast.new(podcast_params)
        if podcast.save
            render json: podcast.to_json( :include => [:episodes])
        end 
    end 


    private
    def podcast_params
        params.require(:podcast).permit(:title, :image, :country, :website)
    end 
end
