class Episode < ApplicationRecord
    belongs_to :podcast
    validates :name,  presence: true 
end
