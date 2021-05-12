class Episode < ApplicationRecord
    has_many :podcast_episodes 
    has_many :podcasts, through: :podcast_episodes
end
