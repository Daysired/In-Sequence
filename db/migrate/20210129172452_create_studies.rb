class CreateStudies < ActiveRecord::Migration[6.1]
  def change
    create_table :studies do |t|
      t.string :topic
      t.text :description
      t.string :logo_url
      t.string :documentation_url
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
