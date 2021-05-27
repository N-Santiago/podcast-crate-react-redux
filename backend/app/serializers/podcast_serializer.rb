class PodcastSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :website
  has_many :podcasts 
end
