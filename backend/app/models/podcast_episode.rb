class PodcastEpisode < ApplicationRecord
    belongs_to :podcast 
    belongs_to :episode
end
