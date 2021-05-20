class Episode < ApplicationRecord
    belongs_to :podcast 

    validates :title, :audio, :podcast_id presence: true 
end
