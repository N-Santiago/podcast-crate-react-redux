class Episode < ApplicationRecord
    belongs_to :podcast 

    validates :title, :spotify_link, :podcast_id, presence: true 
end
