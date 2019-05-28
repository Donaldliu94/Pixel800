json.extract! post, :id, :photographer_id, :title, :description, :like_ids, :created_at, :view
json.photoUrl url_for(post.photo)
json.postUsername post.user.username