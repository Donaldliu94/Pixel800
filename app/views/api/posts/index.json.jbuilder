
json.posts do
    @posts.each do |post|
        json.set! post.id do 
            json.extract! post, :id, :title, :description, :created_at, :photographer_id, :like_ids, :view, :comment_ids   #liker_ids will be populated here after its coming back from the backend
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


json.comments do
    @posts.each do |post|
        post.comments.each do |comment|
            json.set! comment.id do
                json.extract! comment, :id, :user_id, :post_id, :body, :created_at
                json.commentUsername comment.user.username          #why do i need both here and in show, is it because of how it renders when i post a comment and i want to see it update immediately?
            end
        end
    end
end