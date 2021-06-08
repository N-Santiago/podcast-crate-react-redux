class EpisodeSerializer < ActiveModel::Serializer
  attributes :id, :title, :spotify_link, :podcast_id

end
