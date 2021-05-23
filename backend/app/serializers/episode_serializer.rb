class EpisodeSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :audio, :podcast_id
end
