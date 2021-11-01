class PodcastsController < ApplicationController
    before_action :set_podcast, only: [:show, :update, :destroy]
    before_action :unauthorized_check, only: [:update, :destroy]
    # before_action :authenticate_user!
    
    def index 
        podcasts = Podcast.all.with_attached_image
        render json: podcasts
    end 

    def create
        # podcast = current_user.podcast.new(podcast_params)
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
        render json: @podcast
    end 

    def update
        if @podcast.update(podcast_params)
            render json: @podcast
        else
            render json: {
                error: "Cannot edit podcast",
                status: 500
            } 
        end 
    end 

    def destroy
        @podcast.destroy
    end 

    private

    def set_podcast
        @podcast = Podcast.find(params[:id])
    end 

    def podcast_params
        params.permit(:title, :image, :website)
    end 

    def unauthorized_check
        if !@podcast || @podcast.user != current_user
          render json: "You are not authorized to visit this page", status: :unprocessable_entity
        end
    end
    
end
