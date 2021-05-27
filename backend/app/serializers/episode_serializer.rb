class EpisodeSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :spotify_link, :podcast_id
end
