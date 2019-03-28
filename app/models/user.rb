class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence: true
    validates :username, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true


    attr_reader :password
    after_initialize :ensure_session_token


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
