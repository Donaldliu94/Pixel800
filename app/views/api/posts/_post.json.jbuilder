json.extract! post, :id, :photographer_id, :title, :description, :liker_ids, :created_at
json.photoUrl url_for(post.photo)