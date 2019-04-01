class CreatePostPictures < ActiveRecord::Migration[5.2]
  def change
    create_table :post_pictures do |t|
      t.string :title, null: false
      t.integer :photographer_id, null: false
      t.text :description, null: false
      t.timestamps
    end
    add_index :post_pictures, :photographer_id
  end
end
