class PodcastSerializer < ActiveModel::Serializer
  attributes :id, :title, :get_image_url, :website
  has_many :episodes 
end
