class Podcast < ApplicationRecord
    has_many :episodes

    validates :title, presence: true
end
