class Post < ApplicationRecord
    validates :title, :photographer_id, presence: true


    has_one_attached :photo

    belongs_to :user,
    class_name: :User,
    foreign_key: :photographer_id




    


end