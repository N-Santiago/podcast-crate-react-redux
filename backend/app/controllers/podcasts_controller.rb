class PodcastsController < ApplicationController
    def index 
        podcasts = Podcast.all
        render json: podcasts.to_json( :include => [:episodes] )
    end 
end
