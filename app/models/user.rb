class User < ApplicationRecord
  has_many :studies, dependent: :destroy
  has_many :projects, dependent: :destroy
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }

end
