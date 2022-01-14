class PodcastSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_format, :website, :user_id 
  has_many :episodes 

  def image_format
    return unless object.image.attached?

    object.image.blob.attributes
          .slice('filename', 'byte_size')
          .merge(url: object.image_url)
          .tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end
end
