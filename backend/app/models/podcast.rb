class Podcast < ApplicationRecord
    has_many :episodes
    has_one_attached :image
    validates :title, :website, presence: true
end
