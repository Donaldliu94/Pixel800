json.extract! post, :id, :photographer_id, :title, :description, :created_at
json.photoUrl url_for(post.photo)