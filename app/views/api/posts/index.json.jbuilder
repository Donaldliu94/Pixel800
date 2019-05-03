
json.posts do
    @posts.each do |post|
        json.set! post.id do 
            json.extract! post, :id, :title, :description, :created_at, :photographer_id, :liker_ids
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
