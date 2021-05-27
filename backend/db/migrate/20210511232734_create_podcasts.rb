class CreatePodcasts < ActiveRecord::Migration[6.0]
  def change
    create_table :podcasts do |t|
      t.string :image
      t.string :title
      t.string :website

      t.timestamps
    end
  end
end
