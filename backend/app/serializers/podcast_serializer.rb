class PodcastSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :country, :website
  has_many :podcasts 
end
