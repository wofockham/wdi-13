class CreateFruits < ActiveRecord::Migration
  def change
    create_table :fruits do |t|

      t.timestamps null: false
    end
  end
end
