class AddImageToUsers < ActiveRecord::Migration
  def change
    add_column :users, :image, :text
  end
end
