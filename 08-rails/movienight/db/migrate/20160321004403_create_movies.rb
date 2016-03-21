class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.text :title
      t.boolean :in_theatres
      t.date :released
      t.text :rating
      t.text :description

      t.timestamps null: false
    end
  end
end
