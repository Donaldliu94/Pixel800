# PIXEL800
[Live Site](https://pixel800.herokuapp.com/#/)

Pixel800 is a photography platform for professional and novice photographers that was inspired by 500px. It utilizes Rails/PostgreSQL on the backend, along with React.js and Redux on the frontend.


## Features

- Secures frontend to backend user authentication using BCrypt
- Users are capable of uploading their favorite photo and have it on their profile
- Users can add a title and an optional description that resembles their photo
- The most recently uploaded photos are added to the top of their profile


### Photo Uploads 

<a href="https://imgur.com/rkRgjYt"><img src="https://i.imgur.com/rkRgjYt.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/3ANGBCs"><img src="https://i.imgur.com/3ANGBCs.png" title="source: imgur.com" /></a>

- Users can upload images by selecting them from the file explorer which would bring them the upload form.

#### Code Snippet:
<a href="https://imgur.com/WYYmDtN"><img src="https://i.imgur.com/WYYmDtN.png" title="source: imgur.com" /></a>

### Dynamic Photo Gallery 

<a href="https://imgur.com/dYfbQN6"><img src="https://i.imgur.com/dYfbQN6.png" title="source: imgur.com" /></a>

- Users can discover other users' photos and like their photo and follow them as well.

#### Code Snippet:
<a href="https://imgur.com/A1W4tWw"><img src="https://i.imgur.com/A1W4tWw.png" title="source: imgur.com" /></a>

### Viewing Photo Details

<a href="https://imgur.com/DIRljFU"><img src="https://i.imgur.com/DIRljFU.png" title="source: imgur.com" /></a>

- Users can click on any photo and see more specifications about the photos up close! 

### Dynamic Search Bar for photos

<a href="https://imgur.com/lik0vOQ"><img src="https://i.imgur.com/lik0vOQ.png" title="source: imgur.com" /></a>

#### Code Snippet:
<a href="https://imgur.com/SjjnnIE"><img src="https://i.imgur.com/SjjnnIE.png" title="source: imgur.com" /></a>

- Users can also search for any photo by their title and immediately view them.

## Product Design
  The reason for integrating Rails for the application was because of its built-in-support of relational databases and RESTFUL architecture. Due to the fact that this project was a small scale portfolio piece with a limited completion time, convenience and speed were given more priority over scalability. The technologies such as Rails, AWS, S3 Heroku, etc. are sufficient for the anticipated load.
  
Frontend Redux states are set up with distinguished reducers and actions for photos, users, and errors. This integration results to having a normalized state, which makes it easier to keep everything updated with changes in the database. 


## Possible Future Features
- Likes for Photos
- Follows for Users
- User profiles
- Comments on photo/ Add photo to personal gallery
- Sorting photos by various filters 
