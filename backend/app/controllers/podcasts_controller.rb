class PodcastsController < ApplicationController
    before_action :set_podcast, only: [:show, :update, :destroy]
    
    def index 
        podcasts = Podcast.all.with_attached_image
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
        render json: podcast
    end 

    def update
        if podcast.update(podcast_params)
            render json: podcast
        else
            ender json: {
                error: "Cannot edit podcast",
                status: 500
            } 
        end 
    end 

    def destroy
        podcast.destroy
    end 

    private

    def set_podcast
        podcast = Podcast.find(params[:id])
    end 

    def podcast_params
        params.permit(:title, :image, :website)
    end 
end
