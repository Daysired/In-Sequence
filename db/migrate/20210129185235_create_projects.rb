class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.string :img_url
      t.string :deployed_url
      t.string :stack

      t.timestamps
    end
  end
end
