class EpisodesController < ApplicationController
    def index 
        episodes = Episode.all
        render json: episodes.to_json
    end 

    def create
        episode = Episode.new(episode_params)
        if episode.save
            render json: episode.to_json
        else
            render json: {
                error: "Cannot create episode",
                status: 500
            }, status: 500   
        end 
    end 

    def show
        episode = Episode.find(params[:id])
        render json: episode.to_json
    end 

    def destroy
        episode = Episode.find(params[:id])
        episode.destroy
    end 


    private
    def episode_params
        params.require(:episode).permit(:title, :spotify_link, :podcast_id)
    end 
end
