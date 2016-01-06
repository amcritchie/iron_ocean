class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :street
      t.string :zip
      t.string :phone

      t.integer :addressable_id
      t.string :addressable_type

      t.timestamps
    end
  end
end
