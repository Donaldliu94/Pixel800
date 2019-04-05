class Follow < ApplicationRecord
    validates :follower_id, :followed_id, presence: true


    belongs_to :user,
    class_name: :User,
    foreign_key: :follower_id

    belongs_to :user,
    class_name: :User,
    foreign_key: :followed_id



end
