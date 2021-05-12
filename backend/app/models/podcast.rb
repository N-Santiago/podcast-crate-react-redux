class Podcast < ApplicationRecord
    has_many :podcast_episodes
    has_many :episodes, through: :podcast_episodes  
end
