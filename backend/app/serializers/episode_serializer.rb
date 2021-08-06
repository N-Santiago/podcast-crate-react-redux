class EpisodeSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :spotify_link, :podcast_id
end
