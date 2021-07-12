class Podcast < ApplicationRecord
    include Rails.application.routes.url_helpers
    has_many :episodes
    has_one_attached :image
    validates :title, :website, presence: true
    

    def image_url
        url_for(self.image)
    end
end
