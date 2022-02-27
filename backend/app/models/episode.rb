class Episode < ApplicationRecord
    belongs_to :podcast
    validates :name, :date, :spotify_link, presence: true 
    validates :name, length: { in: 3..55, too_long: "%{count} characters is the minimum and maximum allowed" }
    validates :spotify_link, length: { maximum: 255, too_long: "%{count} characters is the minimum and maximum allowed" }, format: /https?:\/\/.+/i
    scope :order_by_date, -> {order(date: :desc)}
    scope :podcast_episodes_by_date, -> (pod_id) {where(podcast_id: pod_id).order(date: :desc)}
    
end
