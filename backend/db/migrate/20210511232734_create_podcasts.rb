class CreatePodcasts < ActiveRecord::Migration[6.0]
  def change
    create_table :podcasts do |t|
      t.string :title
      t.string :website
      # t.references :user, foreign_key: {on_delete: :cascade}

      t.timestamps
    end
  end
end
