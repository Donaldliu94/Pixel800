




json.comment do
    json.extract! @comment, :id, :user_id, :post_id, :body, :created_at
    json.commentUsername @comment.user.username
end


json.post do
    json.extract! @post, :id, :title, :description, :created_at, :photographer_id, :like_ids, :view, :comment_ids
    json.photoUrl url_for(@post.photo)
    json.postUsername @post.user.username
end


json.user do 
    json.extract! @user, :id, :username, :like_ids,  :follower_ids, :followed_ids
end