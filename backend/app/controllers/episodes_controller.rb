class EpisodesController < ApplicationController
    
    def index 
        episodes = Episode.all
        render json: episodes
    end 

    def create
        # byebug
        podcast = Podcast.find_by(id: params[:podcast_id])
        if !!podcast 
            episode = podcast.episodes.build(episode_params)
            if episode.save
                render json: episode
            else
                render json: {
                    error: "Cannot create episode",
                    status: 500
                } 
            end 
        else 
            render json: {
                error: "Podcast is not found",
                status: 500
            }  
        end
    end  

    def show
        episode = Episode.find(params[:id])
        render json: episode
    end 

    def destroy
        episode = Episode.find(params[:id])
        episode.destroy
    end 


    private
        def episode_params
            params.require(:episode).permit(:name, :date, :spotify_link, :podcast_id)
        end 
end
