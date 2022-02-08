class Podcast < ApplicationRecord
    include Rails.application.routes.url_helpers
    belongs_to :user
    has_many :episodes
    has_one_attached :image
    validates :title, :website, presence: true, uniqueness: true 
    validates :title, length: { in: 3..35, too_long: "%{count} characters is the minimum and maximum allowed" }
    validates :website, length: { maximum: 35, too_long: "%{count} characters is the minimum and maximum allowed" }, format: /https?:\/\/.+/i
    def image_url
        url_for(self.image)
    end

    def episodes
        Episode.podcast_episodes_by_date(self.id)
    end 
end
