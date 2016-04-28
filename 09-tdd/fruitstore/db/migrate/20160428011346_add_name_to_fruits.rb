class AddNameToFruits < ActiveRecord::Migration
  def change
    add_column :fruits, :name, :text
  end
end
