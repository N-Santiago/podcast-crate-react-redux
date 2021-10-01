class AddUserToPodcasts < ActiveRecord::Migration[6.0]
  def change
    add_reference :podcasts, :user, null: false, foreign_key: true, on_delete: :cascade
  end
end
