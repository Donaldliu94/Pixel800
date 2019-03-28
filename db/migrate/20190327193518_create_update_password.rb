class CreateUpdatePassword < ActiveRecord::Migration[5.2]
  def change
    create_table :update_passwords do |t|
      remove_column :users, :password
    end
  end
end
