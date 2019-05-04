
json.posts do
    @posts.each do |post|
        json.set! post.id do 
            json.extract! post, :id, :title, :description, :created_at, :photographer_id, :like_ids    #liker_ids will be populated here after its coming back from the backend
            # debugger
            json.photoUrl url_for(post.photo)
        end
    end
end

json.users do
    @users.each do |user|
        json.set! user.id do
            json.partial! 'api/users/user', user: user
        end
    end
end


json.likes do
    @likes.each do |like|
        json.set! like.id do
            json.extract! like, :id, :user_id, :post_id
        end
    end
end


