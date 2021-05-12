class CreateEpisodes < ActiveRecord::Migration[6.0]
  def change
    create_table :episodes do |t|
      t.string :audio
      t.string :image
      t.string :title

      t.timestamps
    end
  end
end
