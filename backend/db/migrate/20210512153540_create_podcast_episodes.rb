class CreatePodcastEpisodes < ActiveRecord::Migration[6.0]
  def change
    create_table :podcast_episodes do |t|
      t.integer :podcast_id
      t.integer :episode_id

      t.timestamps
    end
  end
end
