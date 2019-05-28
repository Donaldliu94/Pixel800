
json.posts do
    @posts.each do |post|
        json.set! post.id do 
            json.extract! post, :id, :title, :description, :created_at, :photographer_id, :like_ids, :view   #liker_ids will be populated here after its coming back from the backend
            json.photoUrl url_for(post.photo)
            json.postUsername post.user.username
        end
    end
end



# json.users do
#     #posts.users
#     @users.each do |user|
#         json.set! user.id do
#             json.partial! 'api/users/user', user: user
#         end
#     end
# end



json.users do
    @posts.each do |post|
        json.set! post.user.id do
            json.extract! post.user, :id, :username, :like_ids, :follower_ids, :followed_ids
        end
    end
end


# json.likes do
#     #posts.likes.each
#     @likes.each do |like|
#         json.set! like.id do
#             json.extract! like, :id, :user_id, :post_id
#         end
#     end
# end



json.likes do
    @posts.each do |post|
        post.likes.each do |like|
            json.set! like.id do
                json.extract! like, :id, :user_id, :post_id
            end
        end
    end
end


# post.each do |post|
#   json.set! post.user.id do
#       json.partial! 'api/users/user', user: post.user
#   end


