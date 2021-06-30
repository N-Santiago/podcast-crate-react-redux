class EpisodeSerializer < ActiveModel::Serializer
  attributes :id, :name, :spotify_link, :podcast_id

end
