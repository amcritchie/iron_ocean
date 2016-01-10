class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.integer :user_id
      t.integer :blog_id

      t.timestamps
    end
  end
end
