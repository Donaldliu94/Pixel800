class Post < ApplicationRecord
    validates :title, :photographer_id, :view, presence: true
    validates :title, length: {maximum: 50}, allow_nil: true

    has_one_attached :photo

    belongs_to :user,
    class_name: :User,
    foreign_key: :photographer_id

    has_many :likes,
    class_name: :Like,
    foreign_key: :post_id


    has_many :likers,
    through: :likes,
    source: :user


    has_many :comments,
    class_name: :Comment,
    foreign_key: :post_id
    


end