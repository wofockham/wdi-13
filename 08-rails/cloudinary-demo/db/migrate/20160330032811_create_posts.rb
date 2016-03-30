class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :image_url
      t.string :heading
      t.text :description

      t.timestamps null: false
    end
  end
end
