class Podcast < ApplicationRecord
    has_many :episodes
    accepts_nested_attributes_for :epidodes
    validates :title, :website, presence: true
end
