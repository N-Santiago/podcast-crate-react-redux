class Episode < ApplicationRecord
    belongs_to :podcast
    validates :name, :date, :spotify_link, presence: true 
end
