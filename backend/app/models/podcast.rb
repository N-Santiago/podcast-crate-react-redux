class Podcast < ApplicationRecord
    has_many :episodes

    validates :title, :website presence: true
end
