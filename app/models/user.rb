class User < ApplicationRecord
    has_secure_password

    has_many :reviews
    has_many :games, through: :reviews


    validates :username, presence: true, uniqueness: true 
    validates :email, presence: true, uniqueness: true, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/
end
