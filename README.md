# PIXEL800

Pixel800 is a photography platform for professional and novice photographers that was inspired by 500px. It utilizes Rails/PostgreSQL on the backend, along with React.js and Redux on the frontend.


## Features

- Secures frontend to backend user authentication using BCrypt
- Users are capable of uploading their favorite photo and have it on their profile
- Users can add a title and an optional description that resembles their photo
- The most recently uploaded photos are added to the top of their profile


### Photo Uploads 

<a href="https://imgur.com/cM3ueo0"><img src="https://i.imgur.com/cM3ueo0.png" title="source: imgur.com" /></a>

- User can upload images by selecting them from the file explorer which would bring them the upload form.


### Dynamic Photo Gallery 

<a href="https://imgur.com/rHbf0Ou"><img src="https://i.imgur.com/rHbf0Ou.png" title="source: imgur.com" /></a>


## Product Design
  The reason for integrating Rails for the application was because of its built-in-support of relational databases and RESTFUL architecture. Due to the fact that this project was a small scale portfolio piece with a limited completion time, convenience and speed were given more priority over scalability. The technologies such as Rails, AWS, S3 Heroku, etc. are sufficient for the anticipated load.
  
Frontend Redux states are set up with distinguished reducers and actions for photos, users, and errors. This integration results to having a normalized state, which makes it easier to keep everything updated with changes in the database. 


## Possible Future Features
- Likes for Photos
- Follows for Users
- User profiles
- Comments on photo/ Add photo to personal gallery
- Sorting photos by various filters 
