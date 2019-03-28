class CreateAddDigest < ActiveRecord::Migration[5.2]
  def change
    create_table :add_digests do |t|
      add_column :users, :password_digest, :string, null: false 
    end
  end
end
