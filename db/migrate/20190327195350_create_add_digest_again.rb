class CreateAddDigestAgain < ActiveRecord::Migration[5.2]
  def change
    create_table :add_digest_agains do |t|
      add_column :users, :password_digest, :string, null: false 
    end
  end
end
