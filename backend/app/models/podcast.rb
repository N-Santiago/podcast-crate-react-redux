class Podcast < ApplicationRecord
    include Rails.application.routes.url_helpers
    has_many :episodes
    has_one_attached :image
    validates :title, :website, presence: true

    def image_url
        url_for(self.image)
    end

    def episodes
        Episode.podcast_episodes_by_date(self.id)
    end 
end
