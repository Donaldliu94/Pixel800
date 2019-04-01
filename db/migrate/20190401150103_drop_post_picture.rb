class DropPostPicture < ActiveRecord::Migration[5.2]
  def change

    drop_table(:post_pictures)

    create_table :posts do |t|
      t.string :title, null: false
      t.integer :photographer_id, null: false
      t.text :description, null: false
      t.timestamps
    end
    add_index :posts, :photographer_id
  end
end
