class Comment < ApplicationRecord
    # validates :user_id, uniqueness: {scope: :post_id}
    validates :body, presence: true


    belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

    belongs_to :post,
    class_name: :Post,
    foreign_key: :post_id


end