class Episode < ApplicationRecord
    belongs_to :podcast
    validates :name, :date, :spotify_link, presence: true 
    scope :order_by_date, -> {order(date: :desc)}
    scope :podcast_episodes_by_date, -> (pod_id) {where(podcast_id: pod_id).order(date: :desc)}

    
end
