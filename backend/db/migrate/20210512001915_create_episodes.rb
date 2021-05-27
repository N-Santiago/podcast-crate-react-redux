class CreateEpisodes < ActiveRecord::Migration[6.0]
  def change
    create_table :episodes do |t|
      t.string :spotify_link
      t.string :title
      t.integer :podcast_id

      t.timestamps
    end
  end
end
