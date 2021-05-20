class EpisodeController < ApplicationController
    def index 
        episodes = Episode.all
        render json: episodess.to_json
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


    private
    def episode_params
        params.require(:episode).permit(:title, :image, :audio, :podcast_id)
    end 
end
