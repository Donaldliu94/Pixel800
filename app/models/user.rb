class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence: true
    validates :username, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true


    attr_reader :password
    after_initialize :ensure_session_token


    has_many :follows_followers,
    class_name: :Follow,
    foreign_key: :followed_id

    has_many :follows_followed,
    class_name: :Follow,
    foreign_key: :follower_id

    has_many :followers,
    through: :follows_followers,
    source: :follower


    has_many :followed,
    through: :follows_followed,
    source: :followed





    has_many :posts,
    class_name: :Post,
    foreign_key: :photographer_id

    has_many :likes,
    class_name: :Like,
    foreign_key: :user_id


    has_many :liked_posts,
    through: :likes,
    source: :post


    def password=(password)
        # debugger
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end


    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        # debugger
        user && user.is_password?(password) ? user : nil 
    end

    def is_password?(password)  
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end


    def self.generate_session_token
        SecureRandom.urlsafe_base64(16)
    end


end
