class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.text :name
      t.integer :artist_id
      t.integer :album_id
      # t.text :url
      t.timestamps
    end
  end
end
