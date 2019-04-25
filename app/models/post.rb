class Post < ApplicationRecord
    validates :title, :photographer_id, presence: true
    validates :title, length: {maximum: 50}, allow_nil: true

    has_one_attached :photo

    belongs_to :user,
    class_name: :User,
    foreign_key: :photographer_id




    


end